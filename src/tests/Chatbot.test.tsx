import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Chatbot } from "../src/components/Chatbot";
import { Logo } from "../src/components/Logo";
import { MockChats } from "../stories/mockData";

vi.mock("../src/hooks/useAutoScroll", () => ({ useAutoScroll: vi.fn() }));

describe("Chatbot", () => {
  it("renders correctly with children", () => {
    const { asFragment } = render(
      <Chatbot>
        <Chatbot.Header
          title="React Chatbot"
          logo={<Logo src="/chatbot-male.png" alt="chatbot-male" />}
        />
        <Chatbot.Messages
          messages={MockChats}
          maxWidth="70%"
          onContentAction={console.log}
        />
        <Chatbot.Input onSubmit={console.log} />
      </Chatbot>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
