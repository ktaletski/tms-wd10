import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { COUNTER_SLICE_NAME } from "./constants";

interface CounterSliceState {
  value: number;
}

const INITIAL_STATE: CounterSliceState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: COUNTER_SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    increment: (counterState) => {
      counterState.value++;
    },
    decrement: (counterState) => {
      counterState.value--;
    },
    incrementByValue: (
      counterState,
      action: PayloadAction<{ valueToAdd: number }>,
    ) => {
      counterState.value = counterState.value + action.payload.valueToAdd;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

// increment(); // { type: 'counter/increment' }
// incrementByValue({ valueToAdd: 5 }); // { type: 'counter/incrementByValue', payload: { valueToAdd: 5 }}
