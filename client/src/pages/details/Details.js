import React, { useState, useEffect } from "react";
import "./details.css";
import "../../components/header/header.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { blog } from "../../Assets/data/data";

function Details() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    // Find the blog item with the matching ID
    const foundBlog = blog.find((blogs) => blogs.id === parseInt(id));
    if (foundBlog) {
      setBlogs(foundBlog);
    } else {
      console.error("Blog post not found");
    }
  }, [id]); // Add 'id' to dependency array

  return (
    <>
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="Blog Cover" />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button">
                  <BsPencilSquare />
                </button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title || "Blog Title"}</h1>
              <p>{blogs.desc}</p>
              <p>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness..."
              </p>
              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading blog details...</p>
      )}
    </>
  );
}

export default Details;
