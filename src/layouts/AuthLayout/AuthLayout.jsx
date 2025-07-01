import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_affilhome.png';
import styles from './AuthLayout.module.css';
import { MdLogin } from 'react-icons/md';
const AuthLayout = () => {
  const route = '/auth/';
  const location = useLocation();
  const checkRoute = !location.pathname.includes('register')
    ? 'register'
    : 'login';
  return (
    <div className={styles.auth_layout}>
      <nav className={styles.auth_nav}>
        <div className={styles.company}>
          <img
            src={logo}
            alt="logo_affilhome"
          />
          <h3>Affilhomes</h3>
        </div>
        <Link to={route + checkRoute}>
          {' '}
          {checkRoute}
          <MdLogin />
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
