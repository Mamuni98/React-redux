import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { IsLoggedIn: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    logIn(state) {
      state.IsLoggedIn = true;
    },
    logOut(state) {
      state.IsLoggedIn = false;
    },
  },
});


export const authActions = authSlice.actions;

export default authSlice.reducer;