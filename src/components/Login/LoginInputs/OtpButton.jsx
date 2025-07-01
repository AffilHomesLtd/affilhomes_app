import { useDispatch, useSelector } from 'react-redux';
import BtnLoader from '../../Loaders/BtnLoader/BtnLoader';
import styles from './LoginInputs.module.css';
import { sendOtpHandler, verifyOtpHandler } from './OtpActions';

const OtpButton = ({ otp, setOtp }) => {
  const dispatch = useDispatch();
  const otpInput = useSelector((state) => state.otp);
  const loaders = useSelector((state) => state.loaders);

  const handleClick = () => {
    if (!otp.sent) sendOtpHandler(dispatch, setOtp);
    else verifyOtpHandler(dispatch, otpInput, otp, setOtp);
  };

  return (
    <>
      {otp.sent && !otp.verified && (
        <button
          type="button"
          onClick={() => sendOtpHandler(dispatch, setOtp)}
          disabled={loaders.sendOtp}
          className={`${styles.reset_otp} ${styles.otp_btn}`}>
          Resend OTP
          {loaders.sendOtp && (
            <BtnLoader
              size="23px"
              borderColor="var(--primary-color)"
              borderWidth="3px"
              duration={0.8}
              containerStyle={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          )}
        </button>
      )}
      <button
        className={`${styles.otp_btn}`}
        type="button"
        disabled={loaders.sendOtp || loaders.verifyOtp || otp.verified}
        onClick={handleClick}>
        {!otp.sent ? 'Send OTP' : 'Verify OTP'}
        {(loaders.sendOtp || loaders.verifyOtp) && (
          <BtnLoader
            size="23px"
            borderColor="var(--primary-color)"
            borderWidth="3px"
            duration={0.8}
            containerStyle={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        )}
      </button>
    </>
  );
};

export default OtpButton;
