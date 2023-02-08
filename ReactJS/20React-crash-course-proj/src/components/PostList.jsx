import { useState } from "react";
import Post from "./Post";
import classes from "./PostLists.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useEffect } from "react";

const PostList = ({ modalIsVisible, onCloseModal }) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPostData(data.posts);
    })();
  }, []);

  const addPostHandler = (newPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPostData((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onCloseModal}>
          <NewPost onCancel={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      {postData.length > 0 && (
        <ul className={classes.posts}>
          {postData.map((post) => {
            return (
              <Post
                key={crypto.randomUUID()}
                author={post.author}
                body={post.body}
              />
            );
          })}
        </ul>
      )}
      {postData.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Try adding some!!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
