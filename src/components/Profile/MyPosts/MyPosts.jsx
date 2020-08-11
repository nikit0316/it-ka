import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

    /*let postData=[
        {id:1,message:'Hi how are you', count:15},
        {id:2, message:"It's my first post", count: 20},
        {id:3, message:"BlaBla", count: 25},
        {id:4, message:"Skyve", count: 23}
    ]*/

    let postElements = props.posts.map(post => <Post id={post.id} message={post.message} count={post.count}/>)

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
