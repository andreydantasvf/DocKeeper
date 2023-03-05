import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto 4rem;
  grid-template-columns: 45% auto;
  grid-template-areas: "header header" "menu content" "menu footer";

  > main {
    height: 100%;
    grid-area: content;
    padding: 2rem;
  }

  &.hide-menu {
    grid-template-areas: "header header" "content content" "footer footer";
  }

  @media (min-width: 768px) {
    grid-template-columns: 30rem auto;
  }
`;

export const CategoriesContent = styled.div`
  margin-top: 2rem;
  background-color: #FFF;
  border-radius: .8rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  > form {
    display: flex;
    flex-direction: column;
    gap: .7rem;

    label {
      font-weight: 700;
    }

    input {
      border-radius: .8rem;
      padding: .5rem;
      margin-bottom: 2rem;
    }

    select {
      padding: .5rem;
      border-radius: .8rem;
    }

    button {
      width: fit-content;
      margin-top: 2rem;
      padding: 1rem;
      border-radius: 1rem;
      border: none;
      color: #FFF;
      background-color: #3282cd;
    }
  }
`;

export const MyCategories = styled.div`
  margin-top: 2rem;
  background-color: #FFF;
  border-radius: .8rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  > h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  > div {
    margin-bottom: 2rem;
  }
`;