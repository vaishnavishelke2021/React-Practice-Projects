import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import Header from "./Header";
import Card from "./Card";

function BlogPage() {
  const { loading, setLoading, isDark } = useContext(AppContext);
  const newURL = "https://codehelp-apis.vercel.app/api/";

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${newURL}get-blog?blogId=${blogId}`;
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
    <div
      className={`font-Catamaran h-full ${
        isDark ? " bg-dark text-light" : " bg-light text-dark"
      }`}
    >
      <Header />
      <div className="w-full h-full md:w-[63%] pt-24 mx-auto py-3 pb-12">
        <div>
          {loading ? (
            <div className="flex justify-center items-center w-full h-screen">
              <div className="spinner"></div>
            </div>
          ) : blog ? (
            <div>
              <div className="max-w-[80%] mx-auto">
                <button
                  className="bg-primary text-light
            p-1 px-4 rounded-sm mt-1 -mb-3"
                  onClick={() => navigation(-1)}
                >
                  Back
                </button>
              </div>

              <Card post={blog} />

              <div className="max-w-[80%] mx-auto text-3xl font-bold mt-14 -mb-3">
                <h1>Related Blogs</h1>
              </div>
              {relatedBlogs.map(
                (post) => post && <Card key={post.id} post={post} />
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-screen">
              <p className="font-bold text-xl">No Blog Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
