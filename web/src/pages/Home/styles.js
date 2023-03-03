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

export const StatsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;