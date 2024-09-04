import styled, { css } from "styled-components";
import { ROLES } from "../../constants";
import { ChatRole } from "../../types";

const RolesStyles = {
  [ROLES.ASSISTANT]: css<{ $inline?: boolean }>`
    justify-content: flex-start;
    ${({ $inline }) => !$inline && `flex-direction: column;`}
  `,
  [ROLES.USER]: css`
    justify-content: flex-start;
    flex-direction: row-reverse;
  `,
};

export const ChatContainer = styled.div<{
  role: ChatRole;
  $inline?: boolean;
}>`
  display: flex;
  padding: ${(props) => props.theme.spacing.sm};
  gap: ${(props) => props.theme.spacing.sm};
  ${({ $inline }) => ($inline ? "flex-direction: row" : "column")}
  ${({ role }) => RolesStyles[role]}
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.sm};
  gap: ${(props) => props.theme.spacing.sm};
  overflow: auto;
  flex: 1;
  background-color: ${(props) => props.theme.pallet.background.main};
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
  $maxWidth: string;
  $role: ChatRole;
  $bgColor?: string;
  $isTitleVisible: boolean;
}>`
  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: ${(props) => {
      const color =
        props.$role === ROLES.ASSISTANT
          ? props.theme.pallet.background.light
          : props.theme.pallet.primary.main;
      return `transparent ${color} transparent transparent`;
    }};

    ${({ $role, $isTitleVisible }) => {
      if ($role === ROLES.ASSISTANT)
        return $isTitleVisible ? TailPosition.TopLeft : TailPosition.LeftTop;
      return TailPosition.RightTop;
    }}
  }
`;
const rolesColors = {
  [ROLES.ASSISTANT]: css`
    background: ${(props) => props.theme.pallet.background.light};
    color: ${(props) => props.theme.pallet.background.text};
    border: 1px solid ${(props) => props.theme.pallet.divider};
  `,
  [ROLES.USER]: css`
    background: ${(props) => props.theme.pallet.primary.main};
    color: ${(props) => props.theme.pallet.primary.text};
  `,
};
export const MessageContainer = styled.div<{
  $maxWidth: string;
  $role: ChatRole;
  $bgColor?: string;
  $isTitleVisible: boolean;
  $noTail?: boolean;
}>`
  html {
    scroll-behavior: smooth;
  }
  display: flex;
  position: relative;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm};
  /* background-color: ${({ $bgColor }) => $bgColor}; */
  border-radius: ${(props) => props.theme.radius.sm};
  max-width: ${({ $maxWidth }) => $maxWidth};
  ${({ $noTail }) => !$noTail && Tail};
  ${({ $role }) => rolesColors[$role]};
`;

export const Title = styled.div<{ $inline: boolean }>`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: ${({ $inline }) => ($inline ? "center" : "flex-start")};
`;
