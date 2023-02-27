import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: transparent;
  border-radius: .5rem;
  border: 1px solid gray;
  padding: 1.2rem 1.4rem;

  > input {
    height: 4.8rem;
    width: 100%;

    background: transparent;
    border: none;

    &:placeholder {
      color: #7C7C8A;
    }
  }
`;