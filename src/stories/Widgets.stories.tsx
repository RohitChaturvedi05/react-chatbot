import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { List as ListWidgets } from "../src/components/widgets/List";
import { Quiz as QuizWidgets } from "../src/components/widgets/Quiz";

import { Header } from "../src/components/Header/Header";
const meta: Meta<typeof Header> = {
  title: "Widgets",
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const Quiz: Story = {
  args: {},
  render: () => {
    return (
      <QuizWidgets
        onSelect={console.log}
        question="What is your favorite color?"
        options={[
          { id: "1", text: "Red" },
          { id: "2", text: "Blue" },
          { id: "3", text: "Green" },
        ]}
      />
    );
  },
};

export const List: Story = {
  args: {},
  render: () => {
    return (
      <ListWidgets
        title="Aute ad Lorem in irure ex deserunt sit duis adipisicing dolore sunt reprehenderit.
        Nulla nisi anim consectetur anim in Lorem velit est nostrud non ipsum. Nulla proident nisi ea 
        velit consectetur esse reprehenderit. Est mollit laborum velit est est Lorem aute. Consectetur 
        laborum mollit dolor fugiat irure aliqua eiusmod deserunt ipsum mollit mollit proident sit deserunt. 
        In dolore laboris magna eu commodo eu."
        items={["Item 1", "Item 2", "Item 3"]}
      />
    );
  },
};
export default meta;
