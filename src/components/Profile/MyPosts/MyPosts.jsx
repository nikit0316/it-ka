import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        <Post message='Hi, how are you?'/>
        <Post message="It's my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
