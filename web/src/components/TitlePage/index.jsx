import { Container } from "./styles";

export function TitlePage({ icon: Icon, title, subTitle }) {
  return (
    <Container>
      <h1>{Icon && <Icon />}{title}</h1>
      <span>{subTitle}</span>
    </Container>
  )
}