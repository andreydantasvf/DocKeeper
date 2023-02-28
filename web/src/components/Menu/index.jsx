import { useSelector } from "react-redux";

import { Container } from "./styles";

export function Menu() {
  const { isMenuVisible } = useSelector(state => state.menu);

  return (
    isMenuVisible && <Container />
  )
}