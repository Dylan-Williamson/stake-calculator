import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = calculatorSlice.actions;


export default calculatorSlice.reducer;
