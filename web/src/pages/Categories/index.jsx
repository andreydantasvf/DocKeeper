import { useEffect, useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { useSelector } from "react-redux";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TitlePage } from "../../components/TitlePage";
import { Loading } from "../../components/Loading";
import { Button } from "../../components/Button";
import { CategoryCard } from "../../components/CategoryCard";

import { api } from "../../services/api";

import { Container, CategoriesContent, MyCategories } from "./styles";

export function Categories() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [parentId, setParentId] = useState(null);
  const { isMenuVisible } = useSelector(state => state.menu);

  async function fetchCategories() {
    const response = await api.get("/categories");
    setData(response.data);
  }

  function handleCreateCategory(event) {
    event.preventDefault();

    if (!name.trim()) {
      return alert("Preencha todos os campos.")
    }

    setIsLoading(true);

    api.post("categories", { name, parentId })
      .then(() => {
        alert("Categoria cadastrada com sucesso!");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar a categoria!")
        }
      }).finally(() => {
        setIsLoading(false);
        fetchCategories();
      });
  }

  function handleDeleteCategory(id) {
    const confirm = window.confirm("Deseja realmente deletar essa categoria?");

    if (confirm) {
      api.delete(`categories/${id}`)
        .then(() => {
          fetchCategories();
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível deletar a categoria!")
          }
        });
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container className={!isMenuVisible && "hide-menu"}>
      <Header />
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