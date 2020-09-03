import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    await timeout(2000);
    return amount;
  }
);

export const initialState = {
  loading: false,
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [incrementAsync.pending]: (state, action) => ({ ...state, pending: true }),
    [incrementAsync.fulfilled]: (state, action) => ({
      pending: false,
      value: state.value + action.payload,
    }),
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const pendingCount = (state) => state.counter.pending;

export default counterSlice.reducer;
