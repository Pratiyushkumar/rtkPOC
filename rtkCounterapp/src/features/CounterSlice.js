import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.number += 1;
    },
    decrementCounter: (state) => {
      state.number--;
    },
  },
});

export default CounterSlice.reducer;
export const { incrementCounter, decrementCounter } = CounterSlice.actions;
