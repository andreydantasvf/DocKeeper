import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  grid-area: header;

  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 100%;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  > .toggle-menu {
    width: 6rem;

    font-size: 2rem;
  }

  > h1 {
    font-size: 3rem;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;

    a {
      color: #FFF;
    }
  }
`;

export const UserMenu = styled.div`
  padding: 2rem;
  gap: 1rem;
  font-size: 2rem;

  position: relative;

  > span {
    font-size: 1.4rem;
    display: none;

    @media(min-width: 768px) {
      display: inline;
    }
  }

  &:hover{
    > div {
      display: flex;
    }
  }
`;

export const DropDown = styled.div`
  width: 17rem;
  padding: 1rem;

  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;

  display: none;  
  flex-direction: column;
  align-items: center;

  background-color: #F9F9F9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  > a {
    width: 100%;
    font-size: 1.6rem;
    text-align: center;
    padding: 1rem;
    word-break: break-all;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @media(min-width: 768px) {
    width: 100%;
  }
`;