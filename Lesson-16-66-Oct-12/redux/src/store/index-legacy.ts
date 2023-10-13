export const a = {};

// @ts-ignore
// eslint-disable
// import { configureStore } from "@reduxjs/toolkit";

// const ACTION = {
//   COUNTER: {
//     INCREMENT: 'counter/increment',
//     INCREMENT_BY_VALUE: 'counter/increment_by_value',
//     DECREMENT: 'counter/decrement',
//   }
// }

// const createIncrementAction = () => {
//   return {
//     type: ACTION.COUNTER.INCREMENT,
//   }
// }

// const createDecrementAction = () => {
//   return {
//     type: ACTION.COUNTER.DECREMENT,
//   }
// }

// const createIncrementByValue = (value: number) => {
//   return {
//     type: ACTION.COUNTER.INCREMENT_BY_VALUE,
//     payload: { value }
//   }
// }

// const INITIAL_STORE_VALUE = {
//   counter: {
//     value: 0,
//   },
//   user: {
//     profileData: {},
//     extra,
//     dfs
//   }
//   theme: {
//     mode,

//   }
// }

// const store = createStore({
//   initialValue: INITIAL_STORE_VALUE,
//   reducer: (state, action) => {
//     switch (action.type) {
//       case ACTION.COUNTER.INCREMENT:
//         // state.counter.value++; -- так нельзя!
//         return {
//           ...state,
//           counter: {
//             ...state.counter,
//             value: state.counter.value + 1
//           }
//         };
//       case ACTION.COUNTER.DECREMENT:
//         return {
//           ...state,
//           counter: {
//             ...state.counter,
//             value: state.counter.value - 1
//           }
//         };
//       case ACTION.COUNTER.INCREMENT_BY_VALUE:
//         return {
//           ...state,
//           counter: {
//             ...state.counter,
//             value: state.counter.value + action.payload.value
//           }
//         }
//     }
//   }
// })

// // const store = configureStore();
