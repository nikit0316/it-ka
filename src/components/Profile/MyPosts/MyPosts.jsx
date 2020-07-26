import React from 'react';
import styles from './MyPosts.module.css';

const MyPosts = () => {
  return
  <div>
    My posts
      <div>
      New post
      </div>
    <div className={styles.posts}>
      <div className={styles.item}>
        post 1
      </div>
      <div className={styles.item}>
        post 2
      </div>
    </div>
  </div>
}

export default Profile;