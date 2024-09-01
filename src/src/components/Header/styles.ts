import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { theme } from "../../theme";

export const HeaderContainer = styled.header<{
  padding?: string;
  minHeight?: string;
}>`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background};
  gap: ${theme.spacing.sm};
  border-radius: ${theme.radius.sm} ${theme.radius.sm} 0 0;
  border-bottom: 1px solid ${theme.colors.divider};
  padding: ${({ padding = theme.spacing.sm }) => padding};
  min-height: ${({ minHeight = "auto" }) => minHeight};
`;

export const Logo = styled.div`
  min-height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled(IconButton)`
  margin-left: auto !important;

  [dir="rtl"] && {
    margin-left: unset;
    margin-right: auto !important;
  }
`;
