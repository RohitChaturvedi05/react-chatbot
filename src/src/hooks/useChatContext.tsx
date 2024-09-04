import { PropsWithChildren, createContext, useContext } from "react";
import { NOOP } from "../constants";

interface ChatContextType {
  onOutSideClick: () => void;
  onClose: () => void;
}

const ChatContext = createContext<ChatContextType>({
  onOutSideClick: NOOP,
  onClose: NOOP,
});

export const ChatProvider = ({
  children,
  value,
}: PropsWithChildren<{
  value: ChatContextType;
}>) => {
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
