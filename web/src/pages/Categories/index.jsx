import { useEffect, useState } from "react";
import { AiFillFolder } from "react-icons/ai";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitlePage } from "../../components/TitlePage";
import { Loading } from "../../components/Loading";
import { Button } from "../../components/Button";
import { CategoryCard } from "../../components/CategoryCard";

import { categories } from "../../mocks/mockCategories";

import { Container, CategoriesContent, MyCategories } from "./styles";
import { BackButton } from "../../components/BackButton";

export function Categories() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [parentId, setParentId] = useState(null);

  function fetchCategories() {
    setData(categories);
  }

  function handleCreateCategory(event) {
    event.preventDefault();

    if (!name.trim()) {
      return alert("Preencha todos os campos.")
    }
    alert("Categoria cadastrada com sucesso!");
    fetchCategories();
  }

  function handleDeleteCategory(id) {
    const confirm = window.confirm("Deseja realmente deletar essa categoria?");

    if (confirm) {
      fetchCategories();
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <Header hideToggle={true} />
      <main>
        <TitlePage
          icon={AiFillFolder}
          title="Categorias"
          subTitle="Crie ou remova as suas categorias"
        />

        <BackButton />

        <CategoriesContent>
          <form>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              type="text"
              placeholder="Informe o nome da categoria..."
              onChange={e => setName(e.target.value)}
            />

            <label htmlFor="categoryFather">Categoria Pai:</label>
            <select
              name="categoryFather"
              id="categoryFather"
              onChange={e => setParentId(e.target.value)}
            >
              <option value={null}>Nenhum</option>
              {data && data.map(category => (
                <option
                  key={String(category.id)}
                  value={category.id}
                >
                  {category.path}
                </option>
              ))}
            </select>
            <Button
              onClick={handleCreateCategory}
              loading={isLoading}
              title="Salvar"
            />
          </form>
        </CategoriesContent>

        <MyCategories>
          <h2>Minhas categorias</h2>
          {
            data ?
              data.map(category => (
                <CategoryCard
                  key={String(category.id)}
                  title={category.name}
                  path={category.path}
                  deleteFunction={() => handleDeleteCategory(category.id)}
                />
              ))
              :
              <Loading />
          }
        </MyCategories>
      </main>
      <Footer />
    </Container>
  )
}