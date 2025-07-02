import { useNavigate } from 'react-router-dom';
import styles from './FinalStep.module.css';
import Title from '../../Title/Title';

const FinalStep = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <img
        src="/reviewed.svg"
        alt="Account under review"
        className={styles.illustration}
      />

      <Title
        mainText="⏳ Just a Moment!"
        subtext={
          <>
            Thanks for signing up with <strong>Affilhomes</strong>! 🌟
            <br />
            <br />
            Your account is currently <strong>under review</strong> — we're just
            making sure everything’s set for a secure and seamless experience.
            <br />
            <br />
            Hang tight, you’ll be up and running in no time!
          </>
        }
      />

      <button
        className={styles.returnBtn}
        onClick={handleReturnHome}>
        Return to Homepage
      </button>
    </div>
  );
};

export default FinalStep;
