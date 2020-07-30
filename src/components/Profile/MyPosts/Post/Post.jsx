import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://yt3.ggpht.com/a/AATXAJw3QzTUKznpSUFe9BBLrcwnr7kkYIftIZRfTg=s900-c-k-c0xffffffff-no-rj-mo"></img>
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
