import styled, { css } from "styled-components";
import img1 from "../assets/image-product-mobile.jpg";
import img2 from "../assets/image-product-desktop.jpg";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.medium} ${theme.spacing.small};
    height: 100vh;

    @media ${theme.media.medium} {
      display: flex;
      align-items: center;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgCard};
    width: 100%;
    max-width: 450px;
    border-radius: 10px;
    margin: 0 auto;
   
    
    @media ${theme.media.medium} {
      display:flex;
      justify-content: center;
      max-width:600px;
      }
    }
  `}
`;

export const CardImg = styled.div`
  ${({ theme }) => css`
    background: url(${img1});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    border-radius: 10px 10px 0 0;

    @media ${theme.media.medium} {
      background-image: url(${img2});
      width: 50%;
      height: auto;
      border-radius: 10px 0 0 10px;
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

    @media ${theme.media.medium} {
      width: 50%;
      gap: ${theme.spacing.medium};
      padding: 30px;
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
    transition: 0.4s all ease-in;

    &:hover {
      background-color: #06341c;
      cursor: pointer;
    }

    & img {
      width: 15px;
      height: 16px;
      border-radius: 0;
    }
  `}
`;
