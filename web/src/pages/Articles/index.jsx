import { useState, useEffect } from "react";
import { AiFillFile } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitlePage } from "../../components/TitlePage";
import { BackButton } from "../../components/BackButton";

import { categories } from "../../mocks/mockCategories";

import { Container, CategoriesContent } from "./styles";

export function Articles() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState("");

  const [isLoading] = useState(false);

  async function fetchCategories() {
    setCategories(categories);
    setCategory(categories[0].id);
  }

  function handleCreateArticles(event) {
    event.preventDefault();

    if (!name.trim() || !description.trim() || !imageUrl.trim() || !category || !content.trim()) {
      return alert("Preencha todos os campos.")
    }
    alert("Artigo cadastrado com sucesso!");
    navigate("/");
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <Header hideToggle={true} />
      <main>
        <TitlePage
          icon={AiFillFile}
          title="Criar Artigos"
          subTitle="Crie seus artigos..."
        />

        <BackButton />

        <CategoriesContent>
          <form>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              type="text"
              placeholder="Informe o nome do artigo..."
              onChange={e => setName(e.target.value)}
            />

            <label htmlFor="description">Descrição:</label>
            <input
              id="description"
              type="text"
              placeholder="Informe a descrição do artigo..."
              onChange={e => setDescription(e.target.value)}
            />

            <label htmlFor="image">Imagem (URL):</label>
            <input
              id="image"
              type="text"
              placeholder="Informe a URL da imagem..."
              onChange={e => setImageUrl(e.target.value)}
            />

            <label htmlFor="category">Categoria:</label>
            <select
              name="category"
              id="category"
              onChange={e => setCategory(e.target.value)}
            >
              {categories && categories.map(category => {
                return (
                  <option
                    key={String(category.id)}
                    value={category.id}
                  >
                    {category.path}
                  </option>
                )
              })}
            </select>

            <label htmlFor="content">Conteúdo:</label>
            <textarea
              name="content"
              id="content"
              placeholder="Informe o Conteúdo do Artigo..."
              onChange={e => setContent(e.target.value)}
            />

            <Button
              onClick={handleCreateArticles}
              loading={isLoading}
              title="Salvar"
            />
          </form>
        </CategoriesContent>
      </main>
      <Footer />
    </Container>
  )
}