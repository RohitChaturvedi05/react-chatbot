import Box from "@mui/material/Box";
import { useMemo } from "react";
import styled from "styled-components";
import { ChatRole, Content } from "../../types";
import { Text } from "../Text";
import { Message } from "./Message";

export type LoadingMessageProps = {
  role: ChatRole;
  content: Content;
  isTitleVisible?: boolean;
  maxWidth?: string;
  bgColor?: string;
};

const LoadingAnimation = styled.div`
  height: 10px;
  aspect-ratio: 2.5;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 20% 50%;
  animation: l44 1s infinite linear alternate;

  @keyframes l44 {
    0%,
    5% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
    12.5% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
    25% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
    37.5% {
      background-position:
        calc(0 * 100% / 3) 100%,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 0,
        calc(3 * 100% / 3) 50%;
    }
    50% {
      background-position:
        calc(0 * 100% / 3) 100%,
        calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 0,
        calc(3 * 100% / 3) 0;
    }
    62.5% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 0;
    }
    75% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 100%;
    }
    87.5% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 100%;
    }
    95%,
    100% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
  }
`;
const Loader = ({ message }: { message: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Text fontSize="small">{message}</Text>
      <LoadingAnimation />
    </Box>
  );
};
export const LoadingMessage = ({
  role,
  bgColor,
  isTitleVisible,
  maxWidth,
  content,
}: LoadingMessageProps) => {
  const loadingContent = useMemo(
    () => (content ? content : <Loader message="Loading" />),
    [content],
  );
  return (
    <Message
      noTail
      content={loadingContent}
      role={role}
      isTitleVisible={isTitleVisible}
      maxWidth={maxWidth}
      bgColor={bgColor}
    />
  );
};
