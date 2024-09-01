import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ChatPanel } from "../src/components/ChatPanel";
import { Logo } from "../src/components/Logo";
import { MockChats } from "./mockData";
const meta: Meta<typeof ChatPanel> = {
  title: "ChatPanel",
  component: ChatPanel,
};

export default meta;
type Story = StoryObj<typeof ChatPanel>;

export const Playground: Story = {
  render: () => {
    const [messages, updateMessage] = useState(MockChats);
    const onInputSubmit = (message: string) => {
      action("onInputSubmit")(message);
      updateMessage((prev) => [
        ...prev,
        { id: prev.length + 1, role: "user", content: message },
      ]);
    };
    return (
      <ChatPanel>
        <ChatPanel.Header
          title="React Chatbot"
          logo={<Logo src="/chatbot-male.png" alt="chatbot-male" />}
          onClose={action("onClose")}
        />
        <ChatPanel.Messages
          messages={messages}
          maxWidth="70%"
          onContentAction={action("onContentAction")}
        />
        <ChatPanel.Input onSubmit={onInputSubmit} />
      </ChatPanel>
    );
  },
};
