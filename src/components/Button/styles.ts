import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.6rem;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.blue_dark};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  > svg {
    margin-top: 0.1rem;
  }
`;
