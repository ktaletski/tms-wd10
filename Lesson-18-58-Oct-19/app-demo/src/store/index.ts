import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import reduxPersistLocalStorage from "redux-persist/lib/storage";

import { USER_SLICE_NAME, userSlice } from "./user";

export const store = configureStore({
  reducer: {
    [USER_SLICE_NAME]: persistReducer(
      {
        key: USER_SLICE_NAME,
        storage: reduxPersistLocalStorage,
      },
      userSlice.reducer,
    ),
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        },
      }),
    ];
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const persistor = persistStore(store);
