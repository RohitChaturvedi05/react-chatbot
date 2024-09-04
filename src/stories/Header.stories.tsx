import ChatIcon from "@mui/icons-material/QuestionAnswer";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Header } from "../src/components/Header/Header";
const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Playground: Story = {
  args: {
    logo: <ChatIcon />,
    title: "React ChatBot",
  },
};
