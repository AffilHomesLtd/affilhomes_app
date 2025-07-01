import styles from './LoginInputs.module.css';
import OtpInput from '../OtpInput/OtpInput';
import OtpButton from './OtpButton';

const LoginInputs = ({
  label = '',
  icon,
  type = '',
  inputType = 'identifier' | 'password',
  otp,
  setOtp,
}) => {
  const Icon = icon;

  return (
    <div className={styles.input_container}>
      <label className={styles.label}>
        <Icon />
        <span>{label}</span>
      </label>
      <div className={styles.input_type}>
        {type === 'otpInput' ? (
          <>
            <OtpInput otp={otp} />
            <OtpButton
              otp={otp}
              setOtp={setOtp}
            />
          </>
        ) : (
          <input
            type={inputType === 'identifier' ? 'text' : inputType}
            placeholder={
              inputType === 'identifier' ? 'e.g. abc123@gmail.com ' : '*****'
            }
            name={inputType}
            className={styles.reg_input}
            required
          />
        )}
      </div>
    </div>
  );
};

export default LoginInputs;
