import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import styled from "styled-components";
import { InputProps } from "../types";
import { Button } from "./Button";

const Footer = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.pallet.background.dark};
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${(props) => props.theme.spacing.sm};
  gap: ${(props) => props.theme.spacing.sm};
  input {
    width: 100%;
    padding: ${(props) => props.theme.spacing.sm};
    border: none;
    background-color: ${(props) => props.theme.pallet.background.main};
    color: ${(props) => props.theme.pallet.background.text};
  }
`;

export const Input = ({
  icon,
  placeholder = "Type your message...",
  buttonLabel = "Send",
  onSubmit,
  onKeyDown,
  ...rest
}: InputProps) => {
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
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
            if (onKeyDown) onKeyDown(e);
          }}
          {...rest}
        />
        <Button
          $type="primary"
          $displayStyle="outline"
          onClick={handleSubmit}
          aria-label="Send message"
        >
          {buttonLabel} {icon ?? <SendIcon />}
        </Button>
      </InputContainer>
    </Footer>
  );
};
