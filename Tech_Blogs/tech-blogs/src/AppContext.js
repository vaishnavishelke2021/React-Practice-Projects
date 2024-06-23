import { createContext, useState } from "react";
import { API_URL } from "./constants";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchData = async (page = 1) => {
    setLoading(true);
    const url = `${API_URL}?page=${page}`;

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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
