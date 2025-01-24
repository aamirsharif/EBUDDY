import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default storage is localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "./reducer";

// Configure redux-persist
const persistConfig = {
  key: "root", // Key for storage
  storage,
};

// Combine reducers (in case you add more reducers later)
const rootReducer = combineReducers({
  user: userReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Export the persistor
export const persistor = persistStore(store);

// Export store and types
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
