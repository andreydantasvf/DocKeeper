import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillHome, AiFillFolder, AiFillFile } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { TitlePage } from "../../components/TitlePage";
import { Stat } from "../../components/Stat";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import { Container, StatsContainer } from "./styles";

export function Home() {
  const [data, setData] = useState(null);
  const { isMenuVisible } = useSelector(state => state.menu);

  useEffect(() => {
    async function fetchStats() {
      const response = await api.get("/stats");

      setData(response.data);
    }

    fetchStats();
  }, []);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
      <Menu />
      <main>
        <TitlePage
          title="Dashboard"
          subTitle="Verifique os dados da aplicação"
          icon={AiFillHome}
        />

        {data ?
          <StatsContainer>
            <Stat
              title="Categorias"
              color="#d54d50"
              stat={data.categories}
              icon={AiFillFolder}
            />
            <Stat
              title="Artigos"
              color="#3bc480"
              stat={data.articles}
              icon={AiFillFile}
            />
            <Stat
              title="Usuários"
              color="#3282cd"
              stat={data.users}
              icon={FaUserAlt}
            />
          </StatsContainer>
          :
          <Loading />
        }

      </main>
      <Footer />
    </Container>
  )
}