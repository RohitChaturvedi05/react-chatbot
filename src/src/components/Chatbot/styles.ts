import styled, { css } from "styled-components";

const shadow = css`
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.19);
`;
export const ChatContainer = styled.div<{
  height: string;
  width: string;
  $noShadow?: boolean;
}>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.pallet.divider};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${({ $noShadow }) => !$noShadow && shadow}
`;
