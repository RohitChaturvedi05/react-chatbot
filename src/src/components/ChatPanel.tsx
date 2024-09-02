import { ReactElement } from "react";
import styled, { css } from "styled-components";
import { theme } from "../theme";
import { Header } from "./Header/Header";
import { Input } from "./Input";
import { Messages } from "./Messages";

type AllowedChildren =
  | ReactElement<typeof Header>
  | ReactElement<typeof Messages>
  | ReactElement<typeof Input>;

const ChatContainer = styled.div<{
  height: string;
  width: string;
  noShadow?: boolean;
}>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.divider};
  border-radius: ${theme.radius.sm};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: ${({ noShadow }) =>
    !noShadow &&
    css`
      0 4px 8px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.19);`};
`;

export type ChatPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  height?: string;
  width?: string;
  noShadow?: boolean;
  children: AllowedChildren | AllowedChildren[] | React.ReactNode[];
};

export const ChatPanel = ({
  height = "100vh",
  width = "auto",
  noShadow,
  children,
  ...rest
}: ChatPanelProps) => (
  <ChatContainer noShadow={noShadow} height={height} width={width} {...rest}>
    {children}
  </ChatContainer>
);

ChatPanel.Header = Header;
ChatPanel.Messages = Messages;
ChatPanel.Input = Input;
