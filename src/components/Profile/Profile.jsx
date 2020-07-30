import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.content}>
      <img src="https://www.zastavki.com/pictures/originals/2014/Nature___Waterfalls____Waterfall_in_the_rainforest_071165_.jpg"></img>
      <div>avatar+descrip</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
