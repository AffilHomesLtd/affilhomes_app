import { FaKey, FaLock } from 'react-icons/fa';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';

export const quotes = [
  { by: 'Louis Glickman', content: 'The best investment on Earth is Earth.' },
  { by: 'Real estate adage', content: 'Location, location, location.' },
  { by: 'Unkwown', content: 'The right place to live can change your life.' },
  {
    by: 'Unkwown',
    content:
      'A house is made of walls and windows, a home is made of love and dreams.',
  },
  {
    by: 'Sam Levenson',
    content: 'Dont watch the clock; do what it does. Keep moing.',
  },
];
export const loginFormInputsData = [
  {
    label: 'Email or Phone',
    icon: FaEnvelopeCircleCheck,
    type: 'dataInput',
    inputType: 'identifier',
  },
  {
    label: 'Password',
    icon: FaLock,
    type: 'dataInput',
    inputType: 'password',
  },
  {
    label: 'Input Login  OTP that was sent to your email/phone',
    icon: FaKey,
    type: 'otpInput',
  },
];
