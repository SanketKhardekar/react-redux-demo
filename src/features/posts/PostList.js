import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deletePost } from "./postSlice";
const PostList = () => {
  const dispatch=useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);
  const isError = useSelector((state) => state.post.isError);

  if (posts.length < 0 || posts === undefined) {
    return <h3>Data Not Found</h3>;
  }
  const onDeleteHandler=(id)=>{
    const index= posts.findIndex(post => post.id === id);
    dispatch(deletePost(index))
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
      {posts !== undefined
        ? posts.map((post) => {
            return (
              <div
                key={post.id}
                style={{
                  height: "200px",
                  width: "150px",
                  backgroundColor: "aliceblue",
                  margin:"20px"
                }}
              >
                <h4>{post.title}</h4>
                <button onClick={onDeleteHandler.bind(this,post.id)}>delete</button>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default PostList;
