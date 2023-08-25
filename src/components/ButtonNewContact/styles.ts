import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  background: none;
  border: none;
  position: fixed;
  bottom: 6rem;
  right: 6rem;
  cursor: pointer;
`;
