import useFetch from "../hooks/useFetch";

const Posts = () => {
  const { data: posts } = useFetch(`https://jsonplaceholder.typicode.com/posts`)

  return (
    <div>
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
