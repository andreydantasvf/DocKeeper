import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
  background: #e1e1e1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .text-content {
    h3 {
      font-size: 3rem;
    }

    span {
      font-size: 1.4rem;
    }
  }

  > button {
    background-color: #cd3030;
    border-radius: .5rem;
    padding: 1rem;
    border: none;
    color: #e1e1e1;
  }
`;
