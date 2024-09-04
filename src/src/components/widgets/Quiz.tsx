import { Box } from "@mui/material";
import { useState } from "react";
import { Text } from "../Text";
import { ChipStyled } from "./styles";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  onSelect: (selectedId: string) => void;
}

export const Quiz = ({ question, options, onSelect }: QuizProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (id: string) => {
    setSelectedOption(id);
    onSelect(id);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Text fontSize="small">{question}</Text>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: 1 }}>
        {options.map((option) => (
          <ChipStyled
            key={option.id}
            label={option.text}
            onClick={() => handleOptionClick(option.id)}
            color={selectedOption === option.id ? "primary" : "default"}
            variant={selectedOption === option.id ? "filled" : "outlined"}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
};
export default Quiz;
