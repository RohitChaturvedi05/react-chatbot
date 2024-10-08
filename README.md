# React Chatbot Component

The react-chatbot component is a highly customizable and composable solution for integrating chat functionality into your React applications. This versatile component serves as an excellent starter kit for building sophisticated chatbot interfaces.

## Key Features

- **Customization**: Extensive options to tailor the chatbot's appearance and behavior to specific needs.
- **Composable**: Modular structure with sub-components like Header, Messages, and Input for fine-grained control.
- **Multiple theming options**: Seamless integration with Material-UI for a wide range of theming capabilities.
- **Flexible deployment**: Can be implemented as a standalone component, floating button-activated interface, or within a drawer.
- **Extensibility**: Support for custom avatars, action handlers, and content interactions to meet complex use cases.

This starter kit provides a solid foundation for developers looking to implement chat functionality in their React projects, offering a balance of out-of-the-box features and the flexibility to customize and extend as needed.

## Installation

You can install the `@rc-packages/react-chatbot` package using either yarn or npm.

### Using npm

```bash
npm i @rc-packages/react-chatbot
```

### Using yarn

```bash
yarn add @rc-packages/react-chatbot
```

### Usage

```tsx
const ChatbotExample = () => {
  const [isOpen, setOpen] = useState(false);
  const [messages, updateMessage] = useState(MockChats);
  const onInputSubmit = (message: string) => {
    updateMessage((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", content: message },
    ]);
  };

  return (
    <div>
      <button onClick={() => setOpen((val) => !val)}>Open</button>
      {isOpen && (
        <Chatbot onClose={() => setOpen(false)}>
          <Chatbot.Header
            title="Default Header"
            logo={<Logo src="/logo.png" alt="company logo" />}
          />
          <Chatbot.Messages
            avatars={{
              assistant: <Logo src="/logo.png" alt="logo" />,
              user: <Logo src="/person.png" alt="person" />,
            }}
            messages={messages}
            maxWidth="70%"
            onContentAction={action("onContentAction")}
          />
          <Chatbot.Input onSubmit={onInputSubmit} />
        </Chatbot>
      )}
    </div>
  );
};
```
