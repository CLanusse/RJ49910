
import useFetch from "../hooks/useFetch";
import Boton from "./Boton";

const Posts = () => {

  const { data: posts } = useFetch(`https://jsonplaceholder.typicode.com/posts`)

  const handleClick = (event) => {
    console.log(event)
  }

  // useEffect(() => {
  //   window.addEventListener('click', handleClick)

  //   return () => {
  //     window.removeEventListener('click', handleClick)
  //   }
  // }, [])

  const title = "Hola mundo"

  return (
    <div className="container m-auto pt-8">

      <h1>{ title.split("").map((char, i) => <span>{char}</span>) }</h1>

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
