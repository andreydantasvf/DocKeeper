import { Container } from "./styles";

export function Stat({ title, icon: Icon, color, stat }) {
  return (
    <Container>
      <Icon size={50} style={{ color }} />
      <div className="data">
        <span>{title}</span>
        <span className="stat">{stat}</span>
      </div>
    </Container>
  )
}