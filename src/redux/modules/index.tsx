import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import accountModules from "./accountModules";
import { ReactNode } from "react";

const store = configureStore({
  reducer: {
    accountModules
  }
});
export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
