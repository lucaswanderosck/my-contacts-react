import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  background-color: ${({ theme }) => theme.colors.gray_500};
  margin-bottom: 1.2rem;
  animation: fadeIn 1.5s;
`;

export const ContactInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const InputInfos = styled.input`
  padding: 0.4rem 0;
  display: block;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: 1.2rem;

  &:not(:disabled) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
  }

  &:first-child {
    font-weight: bold;
    font-size: 1.8rem;
    width: 16rem;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    filter: saturate(150%);
    transition: filter 0.2s;
  }
`;
export const EditButton = styled(Button)`
  color: ${({ theme }) => theme.colors.blue};
`;
export const SaveButton = styled(Button)`
  color: ${({ theme }) => theme.colors.green};
`;
export const RemoveButton = styled(Button)`
  color: ${({ theme }) => theme.colors.danger};
`;
