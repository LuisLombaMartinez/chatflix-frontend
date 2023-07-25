import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../feautures/userSlice";

const rootReducer = combineReducers({
    user: userSlice
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});