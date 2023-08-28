import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(26, 26, 26, 0.9);

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 50rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray_600};
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    padding: 2rem;
    animation: fadeInUp;
    animation-duration: 1.5s;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export const TitleForm = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray_100};
  margin-bottom: 1.8rem;

  > h2 {
    font-size: 1.8rem;
  }

  > svg {
    cursor: pointer;
  }
`;
