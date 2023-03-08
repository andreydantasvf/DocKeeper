import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
  background: #e1e1e1;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4rem;

  img {
    width: 10rem;
    height: 10rem;
  }

  > .text-content {
    > h3 {
      font-size: 3rem;
    }

    > span {
      font-size: 1.4rem;
    }
  }
`;
