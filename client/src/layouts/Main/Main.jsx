import React from 'react';
import { Navbar, Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';
const Main = () => {
  return (
    <div className={styles.main_layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main_body}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <Outlet />
      </main>
      <footer>
        <p>@ 2025 Copyright</p>
      </footer>
    </div>
  );
};

export default Main;
