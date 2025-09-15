import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  password: yup.string().min(6).required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  otp: yup.string().required('OTP is required'),
  pin: yup
    .string()
    .matches(/^\d{4}$/, 'PIN must be exactly 4 digits')
    .required('Transaction PIN is required'),
  confirmPin: yup
    .string()
    .oneOf([yup.ref('pin'), null], 'PINs must match')
    .required('Please confirm your PIN'),
  profileImage: yup.mixed().required('Profile picture is required'),
});
