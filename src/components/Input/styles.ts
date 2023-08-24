import styled from "styled-components";

export const Container = styled.input`
  width: 70rem;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray_700};
  border-radius: 0.8rem;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray_100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_300};
  }

  &:focus {
    outline: none;
  }
`;
