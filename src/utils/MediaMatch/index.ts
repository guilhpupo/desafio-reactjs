import styled, { css } from "styled-components";

export type MediaMatchProps = {
  showOnDesktop?: boolean;
  showOnMobo?: boolean;
};

const mediaMatchModifiers = {
  showOnDesktop: () => css`
    @media(min-width: 769px){
      display: flex;
    }
  `,
  showOnMobo: () => css`
    @media(max-width: 768px){
      display: flex;
    }
  `,
};
export default styled.div<MediaMatchProps>`
  ${({ showOnDesktop = false, showOnMobo = false }) => css`
    display: none;
    ${!!showOnDesktop && mediaMatchModifiers.showOnDesktop()}
    ${!!showOnMobo && mediaMatchModifiers.showOnMobo()}
  `}
`;
