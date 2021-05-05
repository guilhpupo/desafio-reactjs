import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${() => css`
    height: 100vh;
    display: flex;

    ${media.lessThan("medium")`
        flex-direction:column;
        align-items:center;
      `}
  `}
`;

export const RepositoriesSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    padding: 3rem 12rem 3rem 7rem;
    overflow: auto;

    ${media.lessThan("medium")`
        padding: 1rem;
        z-index: ${theme.layers.base};
      `}
  `}
`;

export const RepositoriesList = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    li:nth-child(n + 2) {
      border-top: 0.1rem solid ${theme.colors.lightGray};
      padding-top: ${theme.spacings.xsmall};
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.lessThan("medium")`
        padding: ${theme.spacings.small};
        width: 100%;
    `}
  `}
`;
