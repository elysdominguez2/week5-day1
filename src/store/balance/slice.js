import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, action) => {
      console.log("Hello from the reducer!");
      state.amount = state.amount + action.payload;
    },
    withdraw: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    reset: (state, action) => {
      state.amount = 0;
    },
  },
});

export const { deposit, withdraw, reset } = balanceSlice.actions;
export default balanceSlice.reducer;
