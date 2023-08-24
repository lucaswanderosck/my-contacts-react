import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  background-color: ${({ theme }) => theme.colors.gray_500};
  margin-bottom: 1.2rem;
`;

export const ContactInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const InputInfos = styled.input`
  display: block;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: 1.2rem;

  &:first-child {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
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
