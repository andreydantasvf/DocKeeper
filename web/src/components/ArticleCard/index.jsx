import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function ArticleCard({ name, img, id, description }) {
  const navigate = useNavigate();

  function handleShowArticle(id) {
    navigate(`/articles/${id}`)
  }

  return (
    <Container onClick={() => handleShowArticle(id)}>
      <h3>{name}</h3>
      <span>{description}</span>
    </Container>
  )
}