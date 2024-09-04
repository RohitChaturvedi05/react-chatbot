import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../src/components/Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    buttonLabel: "Send",
    placeholder: "Type your message here...",
    onSubmit: action("onSubmit"),
    icon: undefined,
  },
};
