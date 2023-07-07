import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillFile } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { TitlePage } from "../../components/TitlePage";
import { Loading } from "../../components/Loading";
import { ArticleCard } from "../../components/ArticleCard";

import { articles } from "../../mocks/mockArticles";
import { categoriesTree } from "../../mocks/mockCategoriesTree";
import { handleCategory, handleName } from "../../redux/categorySlice";

import { Container, MyArticles } from "./styles";

export function Home() {
  const { isMenuVisible } = useSelector(state => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    async function setInitialIdCategory() {
      dispatch(handleCategory(categoriesTree[0].id));
      dispatch(handleName(categoriesTree[0].name));
    }

    setInitialIdCategory();
  }, []);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
      <Menu />
      <main>
        <TitlePage
          title="Meus Artigos"
          subTitle={`Todos os seus artigos sobre:`}
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