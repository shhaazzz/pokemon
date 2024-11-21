// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log("Dispatching action:", action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
