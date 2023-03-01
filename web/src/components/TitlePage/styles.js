import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #777;

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: .5rem;
  }

  > span {
    color: #777;
    font-size: 1.3rem;
  }
`;