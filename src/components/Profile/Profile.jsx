import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return <div className={styles.content}><img src='https://www.zastavki.com/pictures/originals/2014/Nature___Waterfalls____Waterfall_in_the_rainforest_071165_.jpg'></img>
    <div>avatar+descrip</div>
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
  </div>
}

export default Profile;