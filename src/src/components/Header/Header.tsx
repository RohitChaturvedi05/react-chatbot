import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Text } from "../Text";
import { CloseBtn, HeaderContainer, Logo } from "./styles";

export type HeaderProps = {
  padding?: string;
  minHeight?: string;
  logo?: React.ReactNode;
  title?: React.ReactNode;
  onClose: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  padding,
  minHeight,
  logo,
  title,
  onClose,
}) => {
  return (
    <HeaderContainer padding={padding} minHeight={minHeight}>
      {logo && <Logo>{logo}</Logo>}
      {typeof title === "string" ? (
        <Text fontSize="medium" flexGrow={1}>
          {title}
        </Text>
      ) : (
        title
      )}

      <CloseBtn aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseBtn>
    </HeaderContainer>
  );
};
