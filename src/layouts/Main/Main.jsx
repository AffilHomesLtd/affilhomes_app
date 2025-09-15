import { Navbar, Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';
import Footer from '../../components/Footer/Footer';
import useScreen from '../../hooks/useScreen';
import { useState } from 'react';
const Main = () => {
  const { isMobile } = useScreen();
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile);

  return (
    <div className={styles.main_layout}>
      <header className={styles.header}>
        <Navbar toggleSidebar={() => setIsSidebarOpen((p) => !p)} />
      </header>
      <main className={styles.main_body}>
        {!isMobile ? (
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
        ) : (
          isSidebarOpen && (
            <>
              <div
                className={styles.sidebarBlur}
                onClick={() => setIsSidebarOpen(false)}></div>
              <aside className={styles.sidebarMobile}>
                <Sidebar />
              </aside>
            </>
          )
        )}
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Main;
