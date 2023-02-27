import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 3.2rem;
  border-radius: .5rem;
  font-weight: 500;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;