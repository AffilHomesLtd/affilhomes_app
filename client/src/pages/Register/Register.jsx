import { Outlet } from 'react-router-dom';
import styles from './Register.module.css';
import logo from '../../assets/images/logo_affilhome.png';
import {
  FiCheck,
  FiUser,
  FiShield,
  FiImage,
  FiHome,
  FiShuffle,
  FiCreditCard,
} from 'react-icons/fi';
import { MdVerifiedUser } from 'react-icons/md';
import {} from 'react-icons/hi';

const Register = () => {
  const stepPercent = 0;
  const isStep1Done = false;
  const isStep2Done = false;
  const isStep3Done = false;
  const isStep4Done = false;
  document.documentElement.style.setProperty(
    '--step-progress',
    `${stepPercent}%`
  );
  useEffect(() => {}, []);

  return (
    <div className={styles.register}>
      <aside>
        <div className={styles.progress}>
          <div className={`${styles.step} ${styles.completed}`}>
            {isStep1Done ? <FiCheck /> : <FiUser />}
          </div>
          <div className={`${styles.step} ${styles.completed}`}>
            {isStep2Done ? <FiCheck /> : <MdVerifiedUser />}
          </div>
          <div className={`${styles.step} ${styles.active}`}>
            {isStep3Done ? <FiCheck /> : <FiCreditCard />}
          </div>
          <div className={styles.step}>
            <FiImage />
          </div>
          <div className={styles.step}>
            <FiHome />
          </div>
          <div className={styles.progressLine}></div>
        </div>
        <div className={styles.progress_text}>
          <p>Personal Info</p>
          <p>KYC Verification</p>
          <p>Transaction Management</p>
          <p>Profile Setup</p>
          <p>Review</p>
        </div>
      </aside>

      <section className={styles.step_content}>
        <Outlet />
      </section>

      <div className={styles.actions}>
        <button>Validate</button>
        <button>Back</button>
      </div>

      <footer>
        <hr />
        <section>
          <img
            src={logo}
            alt="Affilhomes logo"
          />
          <h2>Affilhomes</h2>
        </section>
        <p>Copyright 2025 - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Register;
