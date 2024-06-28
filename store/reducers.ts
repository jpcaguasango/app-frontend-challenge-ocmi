"use client";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import Auth from "./slices/auth";
import { Storage } from "./storage";

const authPersistConfig = {
  key: "auth",
  storage: Storage,
  blacklist: ["activeAuth"],
  transforms: [],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, Auth),
});

export default rootReducer;
