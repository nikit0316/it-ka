import React from "react";
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog  + ' ' + styles.active}>Dimych</div>
                <div className={styles.dialog}>Andrey</div>
                <div className={styles.dialog}>Sveta</div>
                <div className={styles.dialog}>Viktor</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.dialog}>Hi</div>
                <div className={styles.dialog}>How are you</div>
                <div className={styles.dialog}>How's your day</div>
                <div className={styles.dialog}></div>
            </div>
        </div>
    )
}

export default Dialogs;