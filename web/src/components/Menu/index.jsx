import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TreeMenu from 'react-simple-tree-menu'

import { categoriesTree } from "../../mocks/mockCategoriesTree";
import { handleCategory, handleName } from "../../redux/categorySlice";

import { Container } from "./styles";

export function Menu() {
  const [data, setData] = useState(null);
  const { isMenuVisible } = useSelector(state => state.menu);
  const dispatch = useDispatch();

  function handleCategoryMenu(id, name) {
    dispatch(handleCategory(id));
    dispatch(handleName(name));
  }

  useEffect(() => {
    async function fetchTree() {
      setData(categoriesTree)
    }

    fetchTree();
  }, []);

  return (
    isMenuVisible &&
    <Container>
      <TreeMenu data={data} onClickItem={({ id, name }) => handleCategoryMenu(id, name)} />

      <Link to="/categories">
        Gerenciar Categorias
      </Link>
    </Container>
  )
}