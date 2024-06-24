import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { API_URL } from "../constants";
import Header from "./Header";
import Card from "./Card";

function BlogPage() {
  const { loading, setLoading, isDark } = useContext(AppContext);

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${API_URL}?blogId=${blogId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (e) {
      console.log(e);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className={`font-Catamaran h-full ${
        isDark ? " bg-dark text-light" : " bg-light text-dark"
      }`}>
      <Header />
      <div className="w-full h-[100vh] md:w-[63%] pt-24 mx-auto py-3 pb-12">
        <button onClick={() => navigation(-1)}>Back</button>

        <div>
          {loading ? (
            <p>Loading</p>
          ) : blog ? (
            <div>
              <Card blog={blog} />
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
        <h1>Related Blogs</h1>
        {/* {relatedBlogs.map((post) => (
          <Card key={post.id} post={post} />
        ))} */}
      </div>
    </div>
  );
}

export default BlogPage;
