import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setOtpInput } from '../../../redux/slices/otpSlice';

export const useOtpLogic = (otp) => {
  const inputsRef = useRef([]);
  const dispatch = useDispatch();

  const updateOtpValue = () => {
    const otpValue = inputsRef.current
      .map((input) => input?.value || '')
      .join('');
    dispatch(setOtpInput(otpValue));
  };

  useEffect(() => {
    if (otp.verified) {
      inputsRef.current.forEach((input) => {
        if (input) input.value = '';
      });
      dispatch(setOtpInput(''));
    }
  }, [otp.verified, dispatch]);

  return { inputsRef, updateOtpValue };
};
