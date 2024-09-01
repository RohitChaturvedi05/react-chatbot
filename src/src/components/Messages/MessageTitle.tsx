import { Text } from "../Text";
import { Title } from "./styles";

export type MessageTitleProps = {
  avatar: React.ReactNode;
  title: React.ReactNode;
};

export const MessageTitle = ({ avatar, title }: MessageTitleProps) => (
  <Title inline={!!title}>
    {avatar}
    {title && (
      <Text fontSize="small" fontWeight="bold">
        {title}
      </Text>
    )}
  </Title>
);
