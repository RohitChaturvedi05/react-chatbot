import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { theme } from "../../theme";

export const ChipStyled = styled(Chip)`
  padding: ${theme.spacing.sm};
  & > span {
    white-space: break-spaces;
  }
`;
