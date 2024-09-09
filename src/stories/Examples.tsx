import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import { action } from "@storybook/addon-actions";
import { default as React, useState } from "react";
import { Chatbot } from "../src/components/Chatbot";
import { Logo } from "../src/components/Logo";
import { ChatbotProps, Messages } from "../src/types";
import { MockChats } from "./mockData";

const avatars = {
  assistant: <Logo src="/logo.png" alt="logo" />,
  user: <Logo src="/person.png" alt="person" />,
};
export const ChatbotExample = (props: ChatbotProps) => {
  const [messages, updateMessage] = useState(MockChats);
  const onInputSubmit = (message: string) => {
    action("onInputSubmit")(message);
    updateMessage((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", content: message },
    ]);
  };
  return (
    <Chatbot onClose={action("onClose")} {...props}>
      <Chatbot.Header
        title="Default Header"
        logo={<Logo src="/logo.png" alt="company logo" />}
      />
      <Chatbot.Messages
        avatars={avatars}
        messages={messages}
        maxWidth="70%"
        onContentAction={action("onContentAction")}
      />
      <Chatbot.Input onSubmit={onInputSubmit} />
    </Chatbot>
  );
};

export const Example = (props: ChatbotProps) => {
  const [isOpen, setOpen] = useState(false);
  const [messages, updateMessage] = useState<Messages>([...MockChats]);
  const onInputSubmit = (message: string) => {
    updateMessage((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", content: message },
    ]);
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 2rem)",
        width: "100%",
      }}
    >
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpen((val) => !val)}
        sx={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        <AddIcon />
      </Fab>
      {isOpen && (
        <Chatbot
          height="525px"
          width="400px"
          onClose={() => setOpen(false)}
          onOutSideClick={() => setOpen(false)}
          style={{ position: "absolute", bottom: "70px", right: "16px" }}
          {...props}
        >
          <Chatbot.Header
            title="React Chatbot"
            logo={<Logo src="/logo.png" alt="logo" />}
          />
          <Chatbot.Messages
            avatars={avatars}
            messages={messages}
            maxWidth="70%"
            onContentAction={action("onContentAction")}
          />
          <Chatbot.Input onSubmit={onInputSubmit} />
        </Chatbot>
      )}
    </Box>
  );
};

export const DrawerExample = (props: ChatbotProps) => {
  const [isOpen, setOpen] = useState(false);
  const [messages, updateMessage] = useState<Messages>([...MockChats]);
  const onInputSubmit = (message: string) => {
    updateMessage((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", content: message },
    ]);
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        type="button"
        onClick={() => setOpen((val) => !val)}
      >
        Open drawer
      </Button>
      <Drawer open={isOpen} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{
            width: "500px",
            height: "100vh",
          }}
        >
          <Chatbot
            height="100%"
            width="100%"
            onClose={() => setOpen(false)}
            onOutSideClick={() => setOpen(false)}
            {...props}
          >
            <Chatbot.Header
              title="React Chatbot"
              logo={<Logo src="/logo.png" alt="logo" />}
            />
            <Chatbot.Messages
              avatars={avatars}
              messages={messages}
              maxWidth="70%"
              onContentAction={action("onContentAction")}
            />
            <Chatbot.Input onSubmit={onInputSubmit} />
          </Chatbot>
        </Box>
      </Drawer>
    </Box>
  );
};
