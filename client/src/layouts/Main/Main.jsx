import React from 'react';
import { Navbar, Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';
import { FaCircle } from 'react-icons/fa6';
import Footer from '../../components/Footer/Footer';
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
        <Footer />
      </main>
    </div>
  );
};

export default Main;
