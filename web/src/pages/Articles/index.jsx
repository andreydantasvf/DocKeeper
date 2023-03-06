import { useState, useEffect } from "react";
import { AiFillFolder } from "react-icons/ai";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TitlePage } from "../../components/TitlePage";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, CategoriesContent } from "./styles";
import { useNavigate } from "react-router-dom";

export function Articles() {
  const [categories, setCategories] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function fetchCategories() {
    const response = await api.get("/categories");
    setCategories(response.data);
    setCategory(response.data[0].id);
  }

  function handleCreateArticles(event) {
    event.preventDefault();

    if (!name.trim() || !description.trim() || !imageUrl.trim() || !category || !content.trim()) {
      return alert("Preencha todos os campos.")
    }

    setIsLoading(true);

    api.post("articles", { name, description, imageUrl, categoryId: category, content, userId: user.id })
      .then(() => {
        alert("Artigo cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar o artigo!")
        }
      }).finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <Header hideToggle={true} />
      <Menu />
      <main>
        <TitlePage
          icon={AiFillFolder}
          title="Categorias"
          subTitle="Crie ou edite as suas categorias"
        />

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