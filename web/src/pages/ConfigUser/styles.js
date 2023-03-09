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
  }

  @media (min-width: 768px) {
    grid-template-columns: 30rem auto;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  > label {
    font-weight: 700;
  }

  > div {
    margin-bottom: 2rem;
  }
`;
