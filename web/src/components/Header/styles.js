import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  grid-area: header;

  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 6rem;
    height: 100%;
    color: #FFF;
    font-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  > h1 {
    font-size: 3rem;
    color: #FFF;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
  }
`;