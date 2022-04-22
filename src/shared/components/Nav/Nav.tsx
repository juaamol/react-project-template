import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <Link className={styles.Link} to="/">
                Learn
            </Link>
            <Link className={styles.Link} to="/about">
                About
            </Link>
        </nav>
    );
};
