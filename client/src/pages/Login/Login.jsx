import {} from 'react-icons/fa';
import styles from './Login.module.css';
import { RiLoginBoxLine } from 'react-icons/ri';
import { loginFormInputsData } from '../../constants/constants';
import LoginInputs from '../../components/Login/LoginInputs/LoginInputs';
import { useState } from 'react';

const Login = () => {
  const [otp, setOtp] = useState({
    sent: false,
    verified: false,
    password: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.login}>
      <form
        className={styles.login_form_container}
        onSubmit={onSubmitHandler}>
        <div className={styles.icon_wrap}>
          <RiLoginBoxLine />
        </div>
        <strong>Sign in</strong>
        <p className={styles.msg}>
          Welcome back! If you forget your password, your company will need to
          submit a request for a reset. Let us know if you need any assistance!
        </p>

        {/* Input fields */}
        {loginFormInputsData.map((input) =>
          input.type === 'otpInput' && otp.verified ? (
            <></>
          ) : (
            <LoginInputs
              label={input.label}
              icon={input.icon}
              type={input.type}
              inputType={input.inputType}
              otp={otp}
              setOtp={setOtp}
            />
          )
        )}
        <button
          type="submit"
          className={`${styles.submit_btn} ${
            !otp.verified && styles.unverified
          }`}
          disabled={!otp.verified}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
