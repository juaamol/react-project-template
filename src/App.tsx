import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Nav } from './shared/components/Nav/Nav';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                <img src={logo} className={styles.AppLogo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <a
                                className={styles.AppLink}
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React page
                            </a>
                        }
                    />
                    <Route path="about" element={<div>About page</div>} />
                </Routes>
                <div className={styles.Nav}>
                    <Nav />
                </div>
            </header>
        </div>
    );
}

export default App;
