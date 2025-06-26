import { Outlet } from 'react-router-dom';
import styles from './Register.module.css';
import logo from '../../assets/images/logo_affilhome.png';
import { FiLoader } from 'react-icons/fi';
const Register = () => {
  document.documentElement.style.setProperty('--step-1', '40%');
  return (
    <div className={styles.register}>
      <aside>
        <div className={styles.progress}>
          <div className={styles.progress_line}></div>
          <div className={`${styles.uncompleted} ${styles.step}`}>
            <FiLoader />
          </div>
          <div className={`${styles.completed} ${styles.step}`}>
            <FiLoader />
          </div>
          <div className={`${styles.current} ${styles.step}`}>
            <FiLoader />
          </div>
          <div className={`${styles.step_4} ${styles.step}`}>
            <FiLoader />
          </div>
          <div className={`${styles.step_5} ${styles.step}`}>
            <FiLoader />
          </div>
        </div>
      </aside>
      <div className={styles.form}>
        <Outlet />
      </div>
      <footer>
        <hr />
        <section>
          <img src={logo} />
          <h2>Affilhomes</h2>
        </section>
        <p>Copyright 2025 - All right reserved</p>
      </footer>
    </div>
  );
};

export default Register;
