import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <a onClick={handleBack}>
        <FiArrowLeft />
        Voltar
      </a>
    </Container>
  )
}