import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 37.5rem;
    overflow-y: auto;
    background-color: ${theme.colors.darkGray};

    padding: ${theme.spacings.small};

    ${media.lessThan("medium")`
      width:100%;
    `}
  `}
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AvatarSection = styled.article`
  ${({ theme }) => css`
    align-self: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;
export const Avatar = styled.img`
  width: 100%;
  max-width: 20rem;
`;

export const NameSection = styled.article`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const BioSection = styled.article`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    p {
      font-size: ${theme.font.sizes.xsmall};
      line-height: 2rem;
      color: ${theme.colors.gray};
    }
  `}
`;

export const NumbersSection = styled.article``;

export const DevNumbersList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const LinksSection = styled.article``;

export const DevLinksList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const BackButtonSection = styled.section`
  align-self: center;

  a {
    text-decoration: none;
  }
`;
