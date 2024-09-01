import styled, { css } from "styled-components";
import { ROLES } from "../../constants";
import { theme } from "../../theme";
import { ChatRole } from "../../types";

const RolesStyles = {
  [ROLES.ASSISTANT]: css<{ inline?: boolean }>`
    justify-content: flex-start;
    ${({ inline }) => !inline && `flex-direction: column;`}
  `,
  [ROLES.USER]: css`
    justify-content: flex-start;
    flex-direction: row-reverse;
  `,
};

export const ChatContainer = styled.div<{
  role: ChatRole;
  inline?: boolean;
}>`
  display: flex;
  padding: ${theme.spacing.sm};
  gap: ${theme.spacing.sm};
  ${({ inline }) => (inline ? "flex-direction: row" : "column")}
  ${({ role }) => RolesStyles[role]}
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.sm};
  gap: ${theme.spacing.sm};
  overflow: auto;
`;

const TailPosition = {
  TopLeft: css`
    [dir="ltr"] & {
      top: -16px;
      left: 10px;
      transform: rotate(90deg);
    }
    [dir="rtl"] & {
      top: -16px;
      right: 8px;
      transform: rotate(90deg);
    }
  `,
  LeftTop: css`
    [dir="ltr"] & {
      top: 20px;
      left: -17px;
    }
    [dir="rtl"] & {
      top: 12px;
      right: -17px;
      transform: rotate(180deg);
    }
  `,
  RightTop: css`
    [dir="ltr"] & {
      top: 12px;
      right: -17px;
      transform: rotate(180deg);
    }
    [dir="rtl"] & {
      top: 20px;
      left: -17px;
    }
  `,
};
const Tail = css<{
  maxWidth: string;
  role: ChatRole;
  bgColor?: string;
  isTitleVisible?: boolean;
}>`
  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: ${({ bgColor }) =>
      `transparent ${bgColor} transparent transparent`};

    ${({ role, isTitleVisible }) => {
      if (role === ROLES.ASSISTANT)
        return isTitleVisible ? TailPosition.TopLeft : TailPosition.LeftTop;
      return TailPosition.RightTop;
    }}
  }
`;

export const MessageContainer = styled.div<{
  maxWidth: string;
  role: ChatRole;
  bgColor?: string;
  isTitleVisible?: boolean;
  noTail?: boolean;
}>`
  html {
    scroll-behavior: smooth;
  }
  display: flex;
  position: relative;
  align-items: center;
  padding: ${theme.spacing.sm};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${theme.radius.sm};
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ noTail }) => !noTail && Tail};
`;

export const Title = styled.div<{ inline: boolean }>`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: ${({ inline }) => (inline ? "center" : "flex-start")};
`;
