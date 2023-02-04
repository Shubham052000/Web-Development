import React from "react";
import Post from "./Post";
import classes from "./PostLists.module.css";
import NewPost from "./NewPost";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Shubham" body="React.js is awesome" />
        <Post author="Satyawali" body="TS is based" />
      </ul>
    </>
  );
};

export default PostList;
