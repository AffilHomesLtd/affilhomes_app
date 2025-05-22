import { useEffect, useRef } from 'react';
import styles from './OtpInput.module.css';
import { useStore } from '../../../context/StoreContext';

const OtpInput = ({ otp }) => {
  const inputsRef = useRef([]);
  const { setOtpInput } = useStore();
  // const [localOtp, setLocalOtp] = useState('');

  const updateOtpValue = () => {
    const otpValue = inputsRef.current
      .map((input) => input?.value || '')
      .join('');
    console.log('Updated OTP:', otpValue); // Debugging step
    setOtpInput(otpValue);
  };

  useEffect(() => {
    updateOtpValue();
  }, []);

  const inputHandler = (e, index) => {
    const value = e.target.value;
    if (value.length > 0 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
    updateOtpValue();
  };

  const keydownHandler = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
    updateOtpValue();
  };

  const pasteHandler = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, 6); // Ensures max length is 6 digits
    paste.split('').forEach((char, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index].value = char;
      }
    });
    updateOtpValue();
  };

  return (
    <div
      className={styles.otp_input_fields}
      onPaste={pasteHandler}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            disabled={otp.verified || !otp.sent}
            type="text"
            maxLength="1"
            ref={(el) => (inputsRef.current[index] = el)}
            onInput={(e) => inputHandler(e, index)}
            onKeyDown={(e) => keydownHandler(e, index)}
          />
        ))}
    </div>
  );
};

export default OtpInput;
