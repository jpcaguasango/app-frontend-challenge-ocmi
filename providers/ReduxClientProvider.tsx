"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Store from "@/store";

const ReduxClientProvider = ({ children }: { children: React.ReactNode }) => {
  const persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default ReduxClientProvider;
