import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return <header className={styles.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png'></img>
    </header>
}

export default Header;