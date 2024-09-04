import { ReactElement } from "react";
import { ALIGNMENT, ROLES, WIDGET } from "./constants";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: string;
  minHeight?: string;
  logo?: React.ReactNode;
  title?: React.ReactNode;
};

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onSubmit"
> & {
  /** Placeholder text for the input field. Default `Type your message...` */
  placeholder?: string;
  /** Label for the submit button. Default `Send` */
  buttonLabel?: React.ReactNode;
  /** Icon to be displayed alongside the input. Default `SendIcon` */
  icon?: React.ReactNode;
  /** Function to be called when the input is submitted. */
  onSubmit: (value: string) => void;
};

/** Represents the alignment of chat messages, expected to be either 'left' or 'right' */
export type ChatAlignment = (typeof ALIGNMENT)[keyof typeof ALIGNMENT];

/** Defines the role of a participant in the chat, expected to be either 'user' or 'assistant' */
export type ChatRole = (typeof ROLES)[keyof typeof ROLES];

/** Specifies the type of widget used in the chat interface, expected to be either 'quiz' or 'list' */
export type Widget = (typeof WIDGET)[keyof typeof WIDGET];

type QuizOption = {
  /** Unique identifier for the quiz option */
  id: string;
  /** Text content of the quiz option */
  text: string;
};
export type Quiz = {
  /* Specifies the widget type as QUIZ */
  widget: typeof WIDGET.QUIZ;
  /* Defines the quiz question as a string */
  question: string;
  /* Array of QuizOption objects representing answer choices */
  options: QuizOption[];
};
export type List = {
  /** Specifies the widget type as LIST */
  widget: typeof WIDGET.LIST;
  /** Defines the title of the list */
  title: string;
  /** Array of strings representing list items */
  items: string[];
};
export type QuizProps = Quiz & {
  onSelect: (selectedId: string) => void;
};
export type ListProps = List & {};

/** Defines the Content type as a union of React.ReactNode, string, Quiz, or List */
export type Content = React.ReactNode | string | Quiz | List;

export type UserMessage = {
  /* Unique identifier for the user message */
  id: number;
  /* Content of the message, which can be a React node, string, Quiz, or List */
  content: Content;
  /* Role of the message sender, Default `user` */
  role: typeof ROLES.USER;
};

export type AssistantMessage = {
  /* Unique identifier for the message. */
  id: number;
  /* The content of the message, which can be a React node, string, Quiz, or List.*/
  content: Content;
  /* The role of the message sender, Default `assistant`*/
  role: typeof ROLES.ASSISTANT;
  /* Optional title for the message, which can be a React node.*/
  title?: React.ReactNode;
};

/* A message in the chat, which can be either a user message or an assistant message.*/
export type Message = UserMessage | AssistantMessage;
export type Messages = Message[];

export type MessagesProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Avatars for different roles in the chat */
  avatars?: {
    /** Avatar for the assistant role */
    [ROLES.ASSISTANT]?: React.ReactNode;
    /** Avatar for the user role */
    [ROLES.USER]?: React.ReactNode;
  };
  /** Colors for different roles in the chat */
  colors?: {
    /** Color for the assistant role */
    [ROLES.ASSISTANT]?: string;
    /** Color for the user role */
    [ROLES.USER]?: string;
  };
  /** Array of messages to be displayed, Default `[]` */
  messages: Messages;
  /** Maximum width of the chat container, Default `100%` */
  maxWidth?: string;
  /** Indicates if the chat is in a loading state, Default `false` */
  loading?: boolean;
  /* Function to handle actions triggered by content */
  onContentAction?: <T>(content: Content, value: T) => void;
};

export type ChatbotChildren =
  | ReactElement<React.FC<HeaderProps>>
  | ReactElement<React.FC<MessagesProps>>
  | ReactElement<React.FC<InputProps>>;

export type ChatbotProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Height of the chatbot container, Default `100vh` */
  height?: string;
  /** Width of the chatbot container, Default `100%`  */
  width?: string;
  /** If true, removes the shadow from the chatbot container, Default `false` */
  noShadow?: boolean;
  /** Theme of the chatbot, can be either "light" or "dark", Default `light` */
  theme?: "light" | "dark";
  /** Function to be called when the chatbot is closed */
  onClose?: () => void;
  /** Function to be called when a click occurs outside the chatbot */
  onOutSideClick?: () => void;
  /** Children components of the chatbot, must be `Chatbot.Header`, `Chatbot.Messages`, `Chatbot.Footer`*/
  children: ChatbotChildren | ChatbotChildren[];
};
