import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/state";

let addPostActionCreator =()=> {
    return {
        type: 'ADD-POST'
    }
}

let updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        message: text
    }
}

const MyPosts = (props) => {

    /*let postData=[
        {id:1,message:'Hi how are you', count:15},
        {id:2, message:"It's my first post", count: 20},
        {id:3, message:"BlaBla", count: 25},
        {id:4, message:"Skyve", count: 23}
    ]*/

    let postElements = props.posts.map(post => <Post id={post.id} message={post.message} count={post.count}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        //let action = { type: 'ADD-POST'};
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', message: text};
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post
                    </button>
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
