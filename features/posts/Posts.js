import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddPost from "./AddPost";
import PostList from "./PostList";
import { getPosts } from "./postSlice";
const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div
      style={{
        marginTop:"50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <PostList />
      <AddPost />
    </div>
  );
};
export default Posts;
