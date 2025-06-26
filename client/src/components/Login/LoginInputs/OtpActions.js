import { toast } from 'react-toastify';
import {
  setSendOtpLoader,
  setVerifyOtpLoader,
} from '../../../redux/slices/loaderSlice';

export const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

export const sendOtpHandler = (dispatch, setOtp) => {
  const otpGenerated = generateOTP();
  dispatch(setSendOtpLoader(true));

  setTimeout(() => {
    dispatch(setSendOtpLoader(false));
    toast.success(`Test OTP generated. OTP is: ${otpGenerated}`);
    setOtp((prev) => ({ ...prev, sent: true, password: otpGenerated }));
  }, 5000);
};

export const verifyOtpHandler = (dispatch, otpInput, otp, setOtp) => {
  if (!otpInput || otpInput.length < 6) return toast.warn('Fields required');

  dispatch(setVerifyOtpLoader(true));
  if (otp.password === otpInput) {
    setTimeout(() => {
      dispatch(setVerifyOtpLoader(false));
      toast.success('OTP verified! Proceed to login.');
      setOtp((prev) => ({ ...prev, verified: true }));
    }, 5000);
  } else if (otp.verified) {
    toast.error('OTP already verified');
  } else {
    setTimeout(() => {
      dispatch(setVerifyOtpLoader(false));
      toast.error('OTP incorrect! Please check inputs or resend OTP.');
    }, 5000);
  }
};
