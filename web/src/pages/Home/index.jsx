import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { TitlePage } from "../../components/TitlePage";

import { Container } from "./styles";

export function Home() {
  const { isMenuVisible } = useSelector(state => state.menu);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
      <Menu />
      <main>
        <TitlePage
          title="Home"
          subTitle="Página inicial"
          icon={AiFillHome}
        />
      </main>
      <Footer />
    </Container>
  )
}