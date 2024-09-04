import { ThemeProvider } from "styled-components";
import { NOOP } from "../../constants";
import { ChatProvider } from "../../hooks/useChatContext";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { createTheme } from "../../theme";
import { ChatbotProps } from "../../types";
import { Header } from "../Header/Header";
import { Input } from "../Input";
import { Messages } from "../Messages";
import { ChatContainer } from "./styles";

export const Chatbot = ({
  height = "100vh",
  width = "auto",
  noShadow,
  children,
  theme = "light",
  onClose = NOOP,
  onOutSideClick = NOOP,
  ...rest
}: ChatbotProps) => {
  const ref = useOutsideClick(onOutSideClick);
  const chatTheme = createTheme(theme);
  return (
    <ThemeProvider theme={chatTheme}>
      <ChatProvider value={{ onOutSideClick, onClose }}>
        <ChatContainer
          ref={ref}
          $noShadow={noShadow}
          height={height}
          width={width}
          {...rest}
        >
          {children}
        </ChatContainer>
      </ChatProvider>
    </ThemeProvider>
  );
};

Chatbot.Header = Header;
Chatbot.Messages = Messages;
Chatbot.Input = Input;
