// slice 만들기

import { createSlice } from "@reduxjs/toolkit";
// redux toolkit의 `createSlice` API 사용

const initialState = {
  value: 0,
};

const increase = (state) => {
  state.value += 1;
};
const decrease = (state) => {
  state.value -= 1;
};
const increaseByAmount = (state, action) => {
  state.value += action.payload;
};

export const counterSlice = createSlice({
  name: "counter", // slice의 이름, 문자열
  initialState, // 초기값
  reducers: {
    // 리듀서
    increment: increase,
    decrement: decrease,
    incrementByAmount: increaseByAmount,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
