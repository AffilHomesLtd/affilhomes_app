import styles from './OtpInput.module.css';
import { useOtpLogic } from './useOtpLogic';
import { inputHandler, keydownHandler, pasteHandler } from './OtpHandlers';

const OtpInput = ({ otp = { verified: false, sent: false } }) => {
  const { inputsRef, updateOtpValue } = useOtpLogic(otp);

  return (
    <div
      className={styles.otp_input_fields}
      onPaste={(e) => pasteHandler(e, inputsRef, updateOtpValue)}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            ref={(el) => (inputsRef.current[index] = el)}
            onInput={(e) => inputHandler(e, index, inputsRef, updateOtpValue)}
            onKeyDown={(e) =>
              keydownHandler(e, index, inputsRef, updateOtpValue)
            }
          />
        ))}
    </div>
  );
};

export default OtpInput;
