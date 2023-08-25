import styled from "styled-components";

export const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: -2.8rem auto 0;

  > h4 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 6rem 0 2rem;
    color: ${({ theme }) => theme.colors.purple};

    > span {
      font-size: 1.2rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.colors.gray_400};
      color: ${({ theme }) => theme.colors.gray_200};
      padding: 0.2rem 0.8rem;
      margin-left: 0.8rem;
    }
  }
`;

export const withoutContacts = styled.div`
  width: 100%;
  padding: 6.4rem 2.4rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 0.8rem;
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.colors.gray_400};
    margin-bottom: 1.6rem;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray_300};

    & ~ p {
      font-weight: 400;
    }
  }
`;
