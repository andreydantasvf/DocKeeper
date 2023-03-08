import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillFile } from "react-icons/ai";

import { Loading } from "../../components/Loading";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

export function ShowArticle() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  function handleDeleteArticle() {
    const confirm = window.confirm("Deseja mesmo deletar esse artigo?");

    if (confirm) {
      setIsLoading(true);
      api.delete(`articles/${params.id}`)
        .then(() => {
          navigate(-1);
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível deletar a categoria!");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    async function fetchArticle() {
      const response = await api.get(`/articles/${params.id}`);
      setArticle(response.data);
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
            onClick={handleDeleteArticle}
          />
        </main>
        <Footer />
      </Container>
      :
      <Loading />
  )
}