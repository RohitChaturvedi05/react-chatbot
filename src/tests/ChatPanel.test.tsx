import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ChatPanel } from "../src/components/ChatPanel";
import { Logo } from "../src/components/Logo";
import { MockChats } from "../stories/mockData";

vi.mock("../src/hooks/useAutoScroll", () => ({ useAutoScroll: vi.fn() }));

describe("ChatPanel", () => {
  it("renders correctly with children", () => {
    const { asFragment } = render(
      <ChatPanel>
        <ChatPanel.Header
          title="React Chatbot"
          logo={<Logo src="/chatbot-male.png" alt="chatbot-male" />}
          onClose={console.log}
        />
        <ChatPanel.Messages
          messages={MockChats}
          maxWidth="70%"
          onContentAction={console.log}
        />
        <ChatPanel.Input onSubmit={console.log} />
      </ChatPanel>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
