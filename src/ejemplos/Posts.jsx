import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Boton from "./Boton";

const Posts = () => {
  const { data: posts } = useFetch(`https://jsonplaceholder.typicode.com/posts`)

  const handleClick = (event) => {
    console.log(event)
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="container m-auto pt-8">
      <Boton onClick={handleClick}>
        Click me
      </Boton>

      <hr/>
      {posts && (
        <>
          {posts.map((post) => (
            <h2>{post.title}</h2>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
