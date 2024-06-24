import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BlogPage from "./Components/BlogPage";
import TagPage from "./Components/TagPage";
import CategoryPage from "./Components/CategoryPage";

export default function App() {
  const { fetchData, category } = useContext(AppContext);
  

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), null, category);
    } else {
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
