import styled, { css } from "styled-components";

type FullScreenMenuProps = {
  isOpen: boolean;
};

export const Wrapper = styled.section`
  ${({theme})=>css`
    width: 100vw;
    height: 100%
    z-index: ${theme.layers.menu};
  `}
`

export const MenuBar = styled.div<FullScreenMenuProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.darkGray};
    display: ${isOpen ? "flex" : "none"};
    align-items: center;
    height: 5rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};

  `}
`;
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
  `}
`;

export const DevLogin = styled.p`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.xlarge};
    font-style: italic;
    justify-self: center;

  `}
`;



export const MenuFull = styled.div<FullScreenMenuProps>`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? "block" : "none"};
    pointer-events: ${isOpen ? "all" : "none"};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.lightGray};
    }
  `}
`;
