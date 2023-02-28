import { useSelector } from "react-redux";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import { Container } from "./styles";

export function Home() {
  const { isMenuVisible } = useSelector(state => state.menu);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
      <Menu />
      <main>
        <h1>Home</h1>
      </main>
    </Container>
  )
}