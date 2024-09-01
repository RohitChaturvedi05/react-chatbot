import styled from "styled-components";
import { theme } from "../theme";

export const LogoStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${theme.radius.circle};
  object-fit: cover;
`;

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <LogoStyled {...props} />
);
