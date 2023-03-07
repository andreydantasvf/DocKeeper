import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto 4rem;
  grid-template-columns: 45% auto;
  grid-template-areas: "header header" "content content" "footer footer";

  > main {
    height: 100%;
    grid-area: content;
    padding: 2rem;

    button {
      width: fit-content;
      margin-top: 3rem;
      background-color: #cd3030;
      border-radius: 0.5rem;
      border: none;
      color: #e1e1e1;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 30rem auto;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 0.8rem;
`;
