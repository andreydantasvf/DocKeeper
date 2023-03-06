import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Articles } from "../pages/Articles";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  )
}