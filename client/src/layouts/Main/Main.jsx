import React from 'react';
import { Navbar, Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';
import { FaCircle } from 'react-icons/fa6';
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
      <footer className={styles.footer}>
        <p>@ 2025 Copyright</p>
        <div className={styles.footer_links}>
          <p>
            <FaCircle /> Terms and Conditions{' '}
          </p>
          <p>
            <FaCircle /> Privacy
          </p>
          <p>
            <FaCircle /> Policy
          </p>
          <p>
            <FaCircle /> Customer Care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
