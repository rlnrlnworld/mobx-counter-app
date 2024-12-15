import { createContext, useContext } from "react";

// Context
export const CounterContext = createContext();
// Provider
export const CounterProvider = CounterContext.Provider;

// Hooks
export const useCounterStore = () => useContext(CounterContext);