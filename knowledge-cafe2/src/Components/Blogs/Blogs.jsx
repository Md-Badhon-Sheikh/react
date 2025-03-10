import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 bg-slate-100 mt-2">
      <h1 className="text-2xl font-medium">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog 
        key={blog.id} 
        blog={blog}
        handleBookmark ={handleBookmark}
        handleMarkAsRead ={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func
}

export default Blogs;
