import Typography, { TypographyProps } from "@mui/material/Typography";
import styled from "styled-components";

const TypographyStyled = styled(Typography)`
  [dir="rtl"] & {
    text-align: right;
  }
`;

export type TextProps = TypographyProps & {};

export const Text = ({ ...props }: TextProps) => (
  <TypographyStyled fontWeight="lighter" {...props} />
);
