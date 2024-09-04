import type { Meta, StoryObj } from "@storybook/react";
import { Messages } from "../src/components/Messages";
import { MockChats } from "./mockData";
const meta: Meta<typeof Messages> = {
  title: "Messages",
  component: Messages,
};

export default meta;
type Story = StoryObj<typeof Messages>;

export const Playground: Story = {
  args: {
    messages: MockChats,
  },
};
