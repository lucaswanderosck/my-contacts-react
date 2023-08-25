import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray_700};
  border-radius: 0.8rem;

  > svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.blue};
    margin-left: .8rem;
  }

  > input {
    color: ${({ theme }) => theme.colors.gray_100};
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 1.6rem 5.2rem;
    outline: none;
    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_300};
    }
  }
`;
