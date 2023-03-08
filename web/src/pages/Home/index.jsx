import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillFile } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { TitlePage } from "../../components/TitlePage";
import { Loading } from "../../components/Loading";
import { ArticleCard } from "../../components/ArticleCard";

import { api } from "../../services/api";
import { handleCategory, handleName } from "../../redux/categorySlice";

import { Container, MyArticles } from "./styles";

export function Home() {
  const [articles, setArticles] = useState(null);
  const { id } = useSelector(state => state.category);
  const { name } = useSelector(state => state.category);
  const { isMenuVisible } = useSelector(state => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    async function setInitialIdCategory() {
      const response = await api.get("/categories/tree");
      dispatch(handleCategory(response.data[0].id));
      dispatch(handleName(response.data[0].name));
    }

    setInitialIdCategory();
  }, []);

  useEffect(() => {
    async function fetchArticles() {
      const response = await api.get(`articles/category/${id}`);
      setArticles(response.data);
    }

    fetchArticles();
  }, [id]);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
      <Menu />
      <main>
        <TitlePage
          title="Meus Artigos"
          subTitle={`Todos os seus artigos sobre: ${name}`}
          icon={AiFillFile}
        />

        {
          articles
            ?
            <MyArticles>
              {articles.map(article => (
                <ArticleCard
                  key={String(article.id)}
                  img={article.imageUrl}
                  name={article.name}
                  description={article.description}
                  id={article.id}
                />
              ))}
            </MyArticles>
            :
            <Loading />
        }

        <Link to="/articles">
          Criar artigo
        </Link>
      </main>
      <Footer />
    </Container>
  )
}