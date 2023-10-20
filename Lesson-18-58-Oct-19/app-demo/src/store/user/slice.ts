import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { USER_SLICE_NAME } from "./constants";

interface ProfileData {
  id: string;
  firstName: string;
  lastName?: string;
  image?: string;
}
interface CounterSliceState {
  isLoggedIn: boolean;
  profile: null | ProfileData;
}

const INITIAL_STATE: CounterSliceState = {
  isLoggedIn: false,
  profile: null,
};

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    login: (profileState, action: PayloadAction<ProfileData>) => {
      profileState.isLoggedIn = true;
      profileState.profile = action.payload;
    },
    logout: (profileState) => {
      profileState.isLoggedIn = false;
      profileState.profile = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
