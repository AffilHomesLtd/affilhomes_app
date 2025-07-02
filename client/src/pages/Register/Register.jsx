import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import logo from '../../assets/images/logo_affilhome.png';
import { FiCheck, FiUser, FiImage, FiHome } from 'react-icons/fi';
import { MdAccountBalanceWallet, MdVerifiedUser } from 'react-icons/md';
import { useEffect, useMemo, useState } from 'react';

const steps = [
  {
    path: '/auth/register/personal-info',
    icon: <FiUser />,
    label: 'Personal Info',
  },
  {
    path: '/auth/register/kyc',
    icon: <MdVerifiedUser />,
    label: 'KYC Verification',
  },
  {
    path: '/auth/register/transaction',
    icon: <MdAccountBalanceWallet />,
    label: 'Transaction Setup',
  },
  { path: '/auth/register/profile', icon: <FiImage />, label: 'Profile Setup' },
  { path: '/auth/register/review', icon: <FiHome />, label: 'Review' },
];

const LOCAL_STORAGE_KEY = 'registerStepsCompleted';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  // markStepCompleted(currentStepIndex);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(completedSteps));
  }, [completedSteps]);

  const currentStepIndex = steps.findIndex((step) =>
    location.pathname.startsWith(step.path)
  );

  const stepPercent = useMemo(() => {
    return ((currentStepIndex + 1) / steps.length) * 100;
  }, [currentStepIndex]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--step-progress',
      `${stepPercent}%`
    );
  }, [stepPercent]);

  // Utility: mark current step as completed (can be called from child pages)
  const markStepCompleted = (stepIndex) => {
    setCompletedSteps((prev) => {
      const updated = Array.from(new Set([...prev, stepIndex])).sort(
        (a, b) => a - b
      );
      return updated;
    });
  };

  // Validation control: if user visits a later step without completing prior ones
  useEffect(() => {
    const allowedIndex = Math.max(...completedSteps, 0);
    if (currentStepIndex > allowedIndex + 1) {
      navigate(steps[allowedIndex + 1]?.path || steps[0].path, {
        replace: true,
      });
    }
  }, [currentStepIndex, completedSteps, navigate]);

  return (
    <div className={styles.register}>
      <aside>
        <div className={styles.progress}>
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);
            const isActive = index === currentStepIndex;
            return (
              <div
                key={step.path}
                className={`${styles.step} ${
                  isCompleted ? styles.completed : ''
                } ${isActive ? styles.active : ''}`}>
                {isCompleted ? <FiCheck /> : step.icon}
              </div>
            );
          })}
          <div className={styles.progressLine}></div>
        </div>
        <div className={styles.progress_text}>
          {steps.map((step) => (
            <p key={step.label}>{step.label}</p>
          ))}
        </div>
      </aside>

      <section className={styles.step_content}>
        <Outlet
          context={{ completedSteps, currentStepIndex, markStepCompleted }}
        />
      </section>

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
