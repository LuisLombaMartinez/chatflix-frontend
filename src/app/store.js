import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../feautures/userSlice";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import createFilter from "redux-persist-transform-filter";

// save only user
const saveUserOnlyFilter = createFilter('user', ['user']);

// persist config
const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
    transforms: [saveUserOnlyFilter]
}

const rootReducer = combineReducers({
    user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);