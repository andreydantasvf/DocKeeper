import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillFile } from "react-icons/ai";

import { Loading } from "../../components/Loading";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import { articlesShow } from "../../mocks/mockArticlesShow";

import { Container, Content } from "./styles";

export function ShowArticle() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function fetchArticle() {
      const articleFiltered = articlesShow.find(article => article.id == params.id)
      console.log(params.id)
      setArticle(articleFiltered);
    }

    fetchArticle();
  }, []);

  return (
    article
      ?
      <Container>
        <Header hideToggle={true} />
        <main>
          <TitlePage
            title={article.name}
            subTitle={article.description}
            icon={AiFillFile}
          />

          <BackButton />

          <Content>
            {article.content}
          </Content>

          <Button
            title="Deletar"
            loading={isLoading}
          />
        </main>
        <Footer />
      </Container>
      :
      <Loading />
  )
}