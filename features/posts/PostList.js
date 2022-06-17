import React from "react";
import { useSelector } from "react-redux";
const PostList = () => {
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);
  const isError=useSelector((state)=> state.post.isError);
  
  if (posts.length < 0 || posts === undefined) {
    return <h3>Data Not Found</h3>;
  }
  return (
    <div
      style={{
        marginTop: "10px",
        height: "500px",
        width: "300px",
        overflow: "auto",
        backgroundColor: "#ccc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? <h2>Loading...</h2> : null}
      {isError != null ? <h2>{isError}</h2> : null}
        {posts !== undefined ? posts.map((post) => {
          return (
            <h4
            key={post.id}
              style={{
                height: "100px",
                width: "150px",
                backgroundColor: "aliceblue",
              }}
            >
              {post.title}
            </h4>
          );
        }) : null}
    </div>
  );
};
export default PostList;
