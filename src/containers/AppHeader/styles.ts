import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.colors.gray_700};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  > h1 {
    font-size: 4rem;
    font-weight: bold;
    font-family: "Bebas Neue", sans-serif;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.blue} 25%,
      ${({ theme }) => theme.colors.purple_dark} 75%
    );
    background-clip: text;
    -webkit-background-clip: text;
  }

  > svg {
    color: ${({ theme }) => theme.colors.purple_dark};
    margin-bottom: 0.3rem;
  }
`;
