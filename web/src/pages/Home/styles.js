import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto 4rem;
  grid-template-columns: auto auto;
  grid-template-areas: "header header" "menu content" "menu footer";

  > main {
    height: 100%;
    grid-area: content;
    padding: 2rem;

    a {
      background: #2d6e81;
      padding: 2rem;
      color: #FFF;
      border-radius: .8rem;
    }
  }

  &.hide-menu {
    grid-template-areas: "header header" "content content" "footer footer";
  }

  @media (min-width: 768px) {
    grid-template-columns: 30rem auto;
  }
`;

export const MyArticles = styled.div`
  margin: 2rem 0 10rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;