import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import { action } from "@storybook/addon-actions";
import { default as React, useState } from "react";
import { ChatPanel } from "../src/components/ChatPanel";
import { Logo } from "../src/components/Logo";
import { Messages } from "../src/types";

export const Example = () => {
  const [isOpen, setOpen] = useState(false);
  const [messages, updateMessage] = useState<Messages>([]);
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
        <ChatPanel
          height="450px"
          width="300px"
          style={{ position: "absolute", bottom: "70px", right: "16px" }}
        >
          <ChatPanel.Header
            title="React Chatbot"
            logo={<Logo src="/chatbot-male.png" alt="chatbot-male" />}
            onClose={() => setOpen(false)}
          />
          <ChatPanel.Messages
            messages={messages}
            maxWidth="70%"
            onContentAction={action("onContentAction")}
          />
          <ChatPanel.Input onSubmit={onInputSubmit} />
        </ChatPanel>
      )}
    </Box>
  );
};
