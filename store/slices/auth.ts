"use client";
import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
