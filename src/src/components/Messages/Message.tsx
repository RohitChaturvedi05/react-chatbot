import React, { lazy, useMemo } from "react";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { ChatRole, Content } from "../../types";
import { Text } from "../Text";
import { MessageContainer } from "./styles";

const List = lazy(() => import("../widgets/List"));
const Quiz = lazy(() => import("../widgets/Quiz"));

export type MessageProps = {
  role: ChatRole;
  content: Content;
  isTitleVisible?: boolean;
  noTail?: boolean;
  maxWidth?: string;
  bgColor?: string;
  onContentAction?: <T>(content: Content, value: T) => void;
};

export const Message = ({
  role,
  isTitleVisible = false,
  maxWidth = "100%",
  content,
  bgColor,
  noTail,
  onContentAction = () => {},
}: MessageProps) => {
  const innerRef = useAutoScroll<HTMLDivElement>();

  const Content = useMemo(() => {
    if (content === null || content === undefined) {
      return null;
    }
    if (typeof content === "string") {
      return <Text fontSize="small">{content}</Text>;
    }
    if (typeof content === "object" && "widget" in content) {
      if (content.widget === "quiz") {
        return (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Quiz
              {...content}
              onSelect={(selectedId: string) =>
                onContentAction(content, { selectedId })
              }
            />
          </React.Suspense>
        );
      }
      if (content.widget === "list") {
        return (
          <React.Suspense fallback={<div>Loading...</div>}>
            <List {...content} />
          </React.Suspense>
        );
      }
    }
    return content;
  }, [content, onContentAction]);

  return (
    <MessageContainer
      ref={innerRef}
      $role={role}
      $isTitleVisible={isTitleVisible}
      $maxWidth={maxWidth}
      $bgColor={bgColor}
      $noTail={noTail}
    >
      {Content}
    </MessageContainer>
  );
};
