import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Articles } from "../pages/Articles";
import { ShowArticle } from "../pages/ShowArticle";
import { ConfigUser } from "../pages/ConfigUser";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ShowArticle />} />
      <Route path="/config" element={<ConfigUser />} />
    </Routes>
  )
}