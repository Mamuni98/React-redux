import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const dispatchfunction = (state = initialState, action) => {
//   if (action.type === "IncrementBy5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DecrementBy5") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "ShowCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
export const counterActions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
export default store;
