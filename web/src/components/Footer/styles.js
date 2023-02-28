import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`;