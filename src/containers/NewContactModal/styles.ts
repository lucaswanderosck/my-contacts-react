import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  > form {
    background-color: white;
    padding: 2rem;
  }
`;
