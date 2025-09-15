import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import styles from './KYC.module.css';

import { FormContainer } from '../../../../components/Forms';
import Title from '../../Title/Title';
import { kycSchema } from '../../../../utils/validations/kyc';
import Notice from '../../../../components/Notice/Notice';

const FORM_STORAGE_KEY = 'register.kyc';

const kycFormStructure = [
  {
    title: 'Verification Details',
    fields: [
      {
        type: 'input',
        label: 'BVN ID',
        name: 'bvn',
        input: { type: 'text', placeholder: 'e.g. 767365765733' },
      },
      {
        type: 'input',
        label: 'NIN ID',
        name: 'nin',
        input: { type: 'text', placeholder: 'e.g. 767365765733' },
      },
      {
        type: 'input',
        label: 'Front View of ID',
        name: 'frontDoc',
        input: { type: 'file', accept: 'image/*,application/pdf' },
      },
      {
        type: 'input',
        label: 'Back View of ID',
        name: 'backDoc',
        input: { type: 'file', accept: 'image/*,application/pdf' },
      },
    ],
  },
];

const KYC = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const { markStepCompleted, currentStepIndex } = useOutletContext();

  const storedValues = JSON.parse(
    localStorage.getItem(FORM_STORAGE_KEY) || '{}'
  );

  const methods = useForm({
    resolver: yupResolver(kycSchema),
    defaultValues: {
      bvn: '',
      nin: '',
      frontDoc: '',
      backDoc: '',
      ...storedValues,
    },
  });

  useEffect(() => {
    const subscription = methods.watch((value) => {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  const onSubmit = (data) => {
    if (!checked) return;
    console.log('✅ KYC Submitted:', data);
    localStorage.removeItem(FORM_STORAGE_KEY);
    markStepCompleted(currentStepIndex);
    navigate('/auth/register/transaction');
  };

  const onBack = () => navigate(-1);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.kycForm}>
        <Title
          mainText="KYC Verification"
          subtext="Dear valued customer, To help you sell, buy, rent, or manage your real estate properties on our platform, we are required to verify your identity. Kindly provide your KYC (Know Your Customer) details below to continue. If you encounter any issues during this process, please don’t hesitate to contact our support team for assistance. Thank you for choosing Affilhomes LTD."
        />

        {kycFormStructure.map((section) => (
          <FormContainer
            key={section.title}
            title={section.title}
            formFields={section.fields}
          />
        ))}

        <Notice
          path="/test_sound.mp3"
          checked={checked}
          setChecked={setChecked}
          text={
            <>
              Kindly listen to the <strong>Affilhomes User Policy</strong> audio
              before proceeding with your KYC submission.
            </>
          }
        />

        <div className="actions">
          <button
            type="button"
            onClick={onBack}>
            Back
          </button>
          <button
            type="submit"
            onClick={() => console.log('hello')}>
            Next Step
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default KYC;
