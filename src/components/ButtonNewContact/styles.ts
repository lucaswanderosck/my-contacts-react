import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  background: none;
  border: none;
  position: fixed;
  bottom: 6rem;
  right: 6rem;
  cursor: pointer;

  &:hover {
    filter: saturate(150%);
    transition: filter 0.2s;
  }

  @media (max-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }
`;
