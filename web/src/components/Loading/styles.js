import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: .5rem solid gray; /* Light grey */
  border-top: .5rem solid black; /* Blue */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
