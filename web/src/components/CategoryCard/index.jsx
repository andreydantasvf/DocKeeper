import { FaTrash } from "react-icons/fa";

import { Container } from "./styles";

export function CategoryCard({ title, path, deleteFunction }) {
  return (
    <Container>
      <div className="text-content">
        <h3>{title}</h3>
        <span>{path}</span>
      </div>

      <button onClick={deleteFunction}>
        <FaTrash />
      </button>
    </Container>
  )
}