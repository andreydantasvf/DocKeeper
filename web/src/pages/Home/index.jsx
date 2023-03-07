import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillFile } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { TitlePage } from "../../components/TitlePage";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import { Container, MyArticles } from "./styles";
import { ArticleCard } from "../../components/ArticleCard";

export function Home() {
  const [articles, setArticles] = useState(null);
  const { isMenuVisible } = useSelector(state => state.menu);

  useEffect(() => {
    async function fetchArticles() {
      const response = await api.get("/articles");
      setArticles(response.data.data);
    }

    fetchArticles();
  }, []);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
      <Menu />
      <main>
        <TitlePage
          title="Meus Artigos"
          subTitle="Clique em um dos artigos para saber mais sobre ele."
          icon={AiFillFile}
        />

        {
          articles
            ?
            <MyArticles>
              {articles.map(article => (
                <ArticleCard
                  key={String(article.id)}
                  name={article.name}
                  description={article.description}
                  id={article.id}
                />
              ))}
            </MyArticles>
            :
            <Loading />
        }
      </main>
      <Footer />
    </Container>
  )
}