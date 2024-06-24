import { createContext, useState } from "react";
import { API_URL } from "./constants";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isDark, setIsDark] = useState(true);

  const fetchData = async (page = 1, tag = null, category) => {
    setLoading(true);
    let url = `${API_URL}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (e) {
      console.log(e);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchData(page);
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchData,
    isDark,
    setIsDark,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
