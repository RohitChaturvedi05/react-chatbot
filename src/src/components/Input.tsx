import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";

export type InputProps = {
  icon?: React.ReactNode;
  onSubmit: (value: string) => void;
};

const Footer = styled.div`
  padding: ${theme.spacing.sm};
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${theme.radius.sm};
  border: 1px solid ${theme.colors.primary};
  input {
    width: 100%;
    border-radius: ${theme.radius.sm};
    padding: ${theme.spacing.sm};
    border: none;
  }
  button {
    color: ${theme.colors.primary};
    [dir="rtl"] & {
      transform: rotate(180deg);
    }
  }
`;

export const Input: React.FC<InputProps> = ({ icon, onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <Footer>
      <InputContainer>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <IconButton onClick={handleSubmit} size="small">
          {icon ?? <SendIcon />}
        </IconButton>
      </InputContainer>
    </Footer>
  );
};
