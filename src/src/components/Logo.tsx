import styled from "styled-components";

export const LogoStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.radius.circle};
  object-fit: cover;
`;

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <LogoStyled {...props} />
);
