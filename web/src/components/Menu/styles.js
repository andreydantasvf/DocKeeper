import styled from "styled-components";

export const Container = styled.aside`
  grid-area: menu;

  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10rem;

  > div {
    margin-top: 2rem;

    input {
      background: none;
      border: none;
      padding: 2rem;
      border-bottom: 1px solid #FFF;
      color: #FFF;
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        display: flex;
        gap: 1rem;
        padding: 1rem 2rem;
        color: #FFF;

        cursor: pointer;

        &:hover {
          background-color: #414345;
        }
      }
    }
  }

  > a {
    color: #FFF;
    background: #7a9baf;
    padding: 1rem;
    border-radius: .8rem;
  }
`;