import styled from "styled-components";

export const Container = styled.div`
  /* background-color: cor aleatoria;  */
  color: ${({ theme }) => theme.colors.gray_100};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
`;
