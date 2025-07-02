import { useNavigate, useOutletContext } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import styles from './Profile.module.css';

import { FormContainer } from '../../../../components/Forms';
import Title from '../../Title/Title';
import { profileSchema } from '../../../../utils/validations/profile';

const FORM_STORAGE_KEY = 'register.profile';

const profileFormStructure = [
  {
    title: 'Login Details',
    fields: [
      {
        type: 'input',
        label: 'Enter Password',
        name: 'password',
        input: { type: 'password', placeholder: 'Enter a secure password' },
      },
      {
        type: 'input',
        label: 'Re-enter Password',
        name: 'confirmPassword',
        input: { type: 'password', placeholder: 'Confirm your password' },
      },
      {
        type: 'input',
        label: 'OTP Number',
        name: 'otp',
        input: {
          type: 'text',
          placeholder: 'Enter OTP sent to your email/phone',
        },
      },
      {
        type: 'input',
        label: 'Set Transaction Pin',
        name: 'pin',
        input: { type: 'password', placeholder: 'Enter a 4-digit pin' },
      },
      {
        type: 'input',
        label: 'Re-input Pin',
        name: 'confirmPin',
        input: { type: 'password', placeholder: 'Confirm pin' },
      },
      {
        type: 'input',
        label: 'Profile Picture Upload',
        name: 'profileImage',
        input: { type: 'file', accept: 'image/*' },
      },
    ],
  },
];

const Profile = () => {
  const navigate = useNavigate();
  const { markStepCompleted, currentStepIndex } = useOutletContext();

  const storedValues = JSON.parse(
    localStorage.getItem(FORM_STORAGE_KEY) || '{}'
  );

  const methods = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
      otp: '',
      pin: '',
      confirmPin: '',
      profileImage: '',
      ...storedValues,
    },
  });

  useEffect(() => {
    const sub = methods.watch((value) => {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(value));
    });
    return () => sub.unsubscribe();
  }, [methods]);

  const onSubmit = (data) => {
    console.log('✅ Profile Setup Complete:', data);
    localStorage.removeItem(FORM_STORAGE_KEY);
    markStepCompleted(currentStepIndex);
    navigate('/auth/register/review');
  };

  const onBack = () => navigate(-1);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.profileForm}>
        <Title
          mainText="Profile Setup"
          subtext="Dear valued customer, we are glad to help you sell, buy, rent and manage your real estate properties. But for you to proceed, we have to ensure that you are eligible. Please do well to contact us whenever you encounter any difficulty during the vetting process. Thank you for choosing Affilhomes LTD."
        />

        {profileFormStructure.map((section) => (
          <FormContainer
            key={section.title}
            title={section.title}
            formFields={section.fields}
          />
        ))}

        <div className="actions">
          <button
            type="button"
            onClick={onBack}>
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Profile;
