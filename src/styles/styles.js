import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} ${theme.spacing.small};
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgCard};
    width: 100%;
    max-width: 550px;
    border-radius: 10px;

    & img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    padding: ${theme.spacing.medium};

    & h1 {
      color: ${theme.colors.title};
    }

    & h5,
    h6,
    p {
      color: ${theme.colors.text};
    }

    & h5 {
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    & p {
      line-height: 1.7;
    }

    & span {
      color: ${theme.colors.button};
      font-size: 34px;
      display: flex;
      align-items: center;
      gap: ${theme.spacing.small};
    }

    & span > h6 {
      font-size: 14px;
      text-decoration: line-through;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing.small};
    border-radius: 10px;
    color: ${theme.colors.bgCard};
    border: none;
    display: flex;
    gap: ${theme.spacing.small};
    justify-content: center;
    align-items: center;

    & img {
      width: 15px;
      height: 16px;
      border-radius: 0;
    }
  `}
`;
