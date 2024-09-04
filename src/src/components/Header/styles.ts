import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

export const HeaderContainer = styled.header<{
  padding?: string;
  minHeight?: string;
}>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.pallet.background.dark};
  color: ${(props) => props.theme.pallet.background.text};
  gap: ${(props) => props.theme.spacing.sm};
  border-bottom: 1px solid ${(props) => props.theme.pallet.divider};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight = "70px" }) => minHeight};
`;

export const Logo = styled.div`
  min-height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled(IconButton)`
  color: ${(props) => props.theme.pallet.background.text}!important;
  margin-left: auto !important;
  [dir="rtl"] && {
    margin-left: unset;
    margin-right: auto !important;
  }
`;
