import { ROLES } from "../../constants";
import { MessagesProps } from "../../types";
import { LoadingMessage } from "./LoadingMessage";
import { Message } from "./Message";
import { MessageTitle } from "./MessageTitle";
import { ChatContainer, MessagesContainer } from "./styles";

export const Messages = ({
  avatars,
  maxWidth,
  messages,
  loading,
  noTail,
  onContentAction,
  ...rest
}: MessagesProps) => (
  <MessagesContainer {...rest}>
    {messages.map((message) => {
      const { id, content, role } = message;
      const shouldShowTitle = role === ROLES.ASSISTANT && !!message.title;
      return (
        <ChatContainer $inline={!shouldShowTitle} role={role} key={id}>
          <MessageTitle
            avatar={avatars?.[role]}
            title={role === ROLES.ASSISTANT ? message.title : null}
          />
          <Message
            isTitleVisible={shouldShowTitle}
            role={role}
            content={content}
            maxWidth={maxWidth}
            noTail={noTail}
            // bgColor={colors?.[role] ?? DefaultBubbleColors[role]}
            onContentAction={onContentAction}
          />
        </ChatContainer>
      );
    })}
    {loading && (
      <ChatContainer $inline={true} role={ROLES.ASSISTANT}>
        <LoadingMessage
          isTitleVisible={false}
          role={ROLES.ASSISTANT}
          content={null}
          maxWidth={maxWidth}
          // bgColor={
          //   colors?.[ROLES.ASSISTANT] ?? DefaultBubbleColors[ROLES.ASSISTANT]
          // }
        />
      </ChatContainer>
    )}
  </MessagesContainer>
);
