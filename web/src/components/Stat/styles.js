import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 30rem;
  border-radius: .8rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  background-color: white;

  > .data {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    font-size: 2rem;

    .stat {
      font-weight: 700;
      font-size: 4rem;
    }
  }
`;