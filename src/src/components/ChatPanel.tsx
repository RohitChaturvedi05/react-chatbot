import { ReactElement } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { Header } from "./Header/Header";
import { Input } from "./Input";
import { Messages } from "./Messages";

type AllowedChildren =
  | ReactElement<typeof Header>
  | ReactElement<typeof Messages>
  | ReactElement<typeof Input>;

const ChatContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.divider};
  border-radius: ${theme.radius.sm};
`;

export type ChatPanelProps = {
  children: AllowedChildren | AllowedChildren[] | React.ReactNode[];
};

export const ChatPanel = ({ children }: ChatPanelProps) => {
  return <ChatContainer>{children}</ChatContainer>;
};

ChatPanel.Header = Header;
ChatPanel.Messages = Messages;
ChatPanel.Input = Input;
