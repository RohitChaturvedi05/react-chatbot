import { ROLES } from "../../constants";
import { MessagesProps } from "../../types";
import { Logo } from "../Logo";
import { LoadingMessage } from "./LoadingMessage";
import { Message } from "./Message";
import { MessageTitle } from "./MessageTitle";
import { ChatContainer, MessagesContainer } from "./styles";

const DefaultAvatar = {
  [ROLES.ASSISTANT]: <Logo src="/logo.png" alt="chatbot-male" />,
  [ROLES.USER]: <Logo src="/person.png" alt="person-female" />,
};

export const Messages = ({
  avatars,
  maxWidth,
  messages,
  loading,
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
            avatar={avatars?.[role] ?? DefaultAvatar[role]}
            title={role === ROLES.ASSISTANT ? message.title : null}
          />
          <Message
            isTitleVisible={shouldShowTitle}
            role={role}
            content={content}
            maxWidth={maxWidth}
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
