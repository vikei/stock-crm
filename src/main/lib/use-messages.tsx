import {message} from "antd";
import {MessageInstance} from "antd/lib/message";
import React, {createContext, ReactNode, useContext} from "react";

const MessagesContext = createContext<MessageInstance | undefined>(undefined);

export function MessagesProvider({children}: {children: ReactNode}) {
  const [api, contextHolder] = message.useMessage();

  return (
    <MessagesContext.Provider value={api}>
      <>
        {contextHolder}
        {children}
      </>
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const ctx = useContext(MessagesContext);
  if (!ctx) {
    throw new Error("You must wrap in MessagesProvider");
  }
  return ctx;
}
