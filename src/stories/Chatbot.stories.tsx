import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Chatbot } from "../src/components/Chatbot";
import { ChatbotExample, DrawerExample, Example } from "./Examples";

const meta: Meta<typeof Chatbot> = {
  title: "Chatbot",
  component: Chatbot,
  argTypes: {
    height: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    noShadow: {
      control: { type: "boolean" },
    },
    theme: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
};

type Story = StoryObj<typeof Chatbot>;

export const Playground: Story = {
  render: (args, context) => {
    const theme = context.globals.theme;
    return <ChatbotExample {...args} theme={theme} />;
  },
};

export const PopupExample: Story = {
  render: (args, context) => {
    const theme = context.globals.theme;
    return <Example {...args} theme={theme} />;
  },
};
export const DrawerExamples: Story = {
  render: (args, context) => {
    const theme = context.globals.theme;
    return <DrawerExample {...args} theme={theme} />;
  },
};

export default meta;
