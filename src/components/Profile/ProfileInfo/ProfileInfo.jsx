import React from "react";
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.zastavki.com/pictures/originals/2014/Nature___Waterfalls____Waterfall_in_the_rainforest_071165_.jpg"></img>
            </div>
            <div className={styles.descriptionBlock}>avatar+descrip</div>
        </div>
    )
}

export default ProfileInfo;