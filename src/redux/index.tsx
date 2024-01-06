"use client";
import { Provider } from "react-redux";
import { ReactNode, useRef } from "react";
import { makeStore, AppStore } from "@/redux/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
