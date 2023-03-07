import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DashBoard } from "../pages/DashBoard";
import { Categories } from "../pages/Categories";
import { Articles } from "../pages/Articles";
import { ShowArticle } from "../pages/ShowArticle";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ShowArticle />} />
    </Routes>
  )
}