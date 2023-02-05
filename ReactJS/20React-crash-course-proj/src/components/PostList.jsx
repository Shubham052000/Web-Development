import { useState } from "react";
import Post from "./Post";
import classes from "./PostLists.module.css";
import NewPost from "./NewPost";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Satyawali" body="TS is based" />
      </ul>
    </>
  );
};

export default PostList;
