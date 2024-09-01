import { Messages } from "../src/types";

export const MockChats: Messages = [
  {
    id: 1,
    role: "assistant",
    content: "Welcome to the chatbot! How can I help you today?",
  },
  {
    id: 2,
    role: "user",
    content:
      "Hi! I need some help with my order. I tried checking the status online, but I couldn't find the information I was looking for. Could you please assist me with finding the details?",
  },
  {
    id: 3,
    role: "assistant",
    content:
      "Sure, I can assist you with that. Can you please provide your order number so I can pull up the relevant details for you? Once I have your order number, I can check the status, delivery date, and any other information you might need regarding your order.",
  },
  {
    id: 4,
    role: "user",
    content: "My order number is 123456.",
  },
  {
    id: 5,
    role: "assistant",
    content:
      "Thank you! Let me check the details for your order. It will just take a moment. While I'm looking into this, is there anything specific you're concerned about with your order, like delivery timing or the condition of the items? Your input will help me assist you better.",
  },
  {
    id: 6,
    role: "assistant",
    content:
      "I see that your order is scheduled for delivery tomorrow. Everything seems to be on track. The package is currently in transit and should arrive by the end of the day tomorrow. Is there anything else you need help with, or is there anything else you would like to change about your order?",
  },
  {
    id: 7,
    role: "user",
    content: "Can I reschedule the delivery?",
  },
  {
    id: 8,
    role: "assistant",
    content:
      "Yes, you can reschedule the delivery. Would you like me to do that for you now, or would you prefer to choose a specific date and time that works best for you? Just let me know what your preference is, and I'll make sure the delivery is adjusted accordingly.",
  },
  {
    id: 9,
    role: "user",
    content: "Yes, please reschedule it for Friday.",
  },
  {
    id: 10,
    role: "assistant",
    content:
      "Your delivery has been successfully rescheduled for Friday. You will receive a confirmation email shortly with the updated delivery details. If you have any other questions or need further assistance with anything else, feel free to ask. I'm here to help make sure everything goes smoothly for you.",
  },
  // {
  //   id: 11,
  //   title: "Quiz",
  //   role: "assistant",
  //   content: {
  //     widget: "quiz",
  //     question: "What are the benefits of using TypeScript over JavaScript?",
  //     options: [
  //       {
  //         id: "11",
  //         text: "TypeScript provides static typing which helps catch errors early",
  //       },
  //       { id: "12", text: "TypeScript compiles directly into machine code" },
  //       { id: "13", text: "TypeScript allows for dynamic typing at runtime" },
  //       {
  //         id: "14",
  //         text: "TypeScript can be run directly in the browser without compilation",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 12,
  //   title: "List",
  //   role: "assistant",
  //   content: {
  //     widget: "list",
  //     title: "Top Programming Languages",
  //     items: [
  //       "JavaScript",
  //       "Python",
  //       "Java",
  //       "C++",
  //       "C#",
  //       "Ruby",
  //       "Swift",
  //       "Go",
  //       "PHP",
  //       "Rust",
  //     ],
  //   },
  // },
];
