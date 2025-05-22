import { useStore } from '../../../context/StoreContext';
import OtpInput from '../OtpInput/OtpInput';
import styles from './LoginInputs.module.css';
import { toast } from 'react-toastify';
const LoginInputs = ({
  label = '',
  icon,
  type = '',
  inputType = 'identifier' | 'password',
  otp = { sent: true | false, verified: true | false, password: '' },
  setOtp,
}) => {
  const Icon = icon;

  const { otpInput } = useStore();

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendOtpHandler = () => {
    const otpGenerated = generateOTP();
    toast.success(`Test Otp generated. OTP is: ${otpGenerated}`, {
      autoClose: 6000,
    });
    setOtp((prev) => ({ ...prev, sent: true, password: otpGenerated }));
  };

  const verifyOtpHandler = () => {
    if (!otpInput || otpInput.length < 6) return toast.warn('fields required');
    if (otp.password === otpInput) {
      setOtp((prev) => ({ ...prev, verified: true }));
      toast.success('Otp verified! Proceed to login.');
    } else {
      toast.error('Otp passed is incorrect! Please try again or resend otp.');
    }
  };

  const otpHandler = (innerText) => {
    if (innerText === 'Send Otp') {
      sendOtpHandler();
    } else {
      verifyOtpHandler();
    }
  };

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
            {otp.sent && !otp.verified && (
              <button
                type="button"
                onClick={() => sendOtpHandler()}
                className={`${styles.reset_otp} ${styles.otp_btn}`}>
                Resend OTP
              </button>
            )}
            <button
              className={`${styles.otp_btn} ${
                otp.verified && styles.unverified
              }`}
              type="button"
              onClick={(e) => {
                otpHandler(e.target.innerText);
              }}>
              {!otp.sent
                ? 'Send Otp'
                : otp.verified
                ? 'Verified'
                : 'Verify Otp'}
            </button>
          </>
        ) : (
          <input
            type={inputType === 'identifier' ? 'text' : inputType}
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
