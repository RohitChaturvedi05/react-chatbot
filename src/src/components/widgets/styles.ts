import Chip from "@mui/material/Chip";
import styled from "styled-components";

export const ChipStyled = styled(Chip)`
  padding: ${(props) => props.theme.spacing.sm};
  & > span {
    white-space: break-spaces;
  }
`;
