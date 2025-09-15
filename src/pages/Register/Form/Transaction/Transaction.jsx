import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import styles from './Transaction.module.css';

import { FormContainer } from '../../../../components/Forms';
import Title from '../../Title/Title';
import Notice from '../../../../components/Notice/Notice';
import { transactionSchema } from '../../../../utils/validations/transaction';

const FORM_STORAGE_KEY = 'register.transaction';

const transactionFormStructure = [
  {
    title: 'Withdrawal Account',
    fields: [
      {
        type: 'input',
        label: 'Account Number',
        name: 'accountNumber',
        input: { type: 'text', placeholder: 'e.g. 36765846985' },
      },
      {
        type: 'input',
        label: 'Bank',
        name: 'bank',
        input: { type: 'text', placeholder: 'e.g. UBA' },
      },
      {
        type: 'input',
        label: 'Account Name',
        name: 'accountName',
        input: { type: 'text', placeholder: 'e.g. Goodnews' },
      },
    ],
  },
];

const Transaction = () => {
  const navigate = useNavigate();
  const { markStepCompleted, currentStepIndex } = useOutletContext();
  const [checked, setChecked] = useState(false);

  const storedValues = JSON.parse(
    localStorage.getItem(FORM_STORAGE_KEY) || '{}'
  );

  const methods = useForm({
    resolver: yupResolver(transactionSchema),
    defaultValues: {
      accountNumber: '',
      bank: '',
      accountName: '',
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
    console.log('✅ Transaction Info Submitted:', data);
    localStorage.removeItem(FORM_STORAGE_KEY);
    markStepCompleted(currentStepIndex);
    navigate('/auth/register/profile-setup');
  };

  const onBack = () => navigate(-1);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.transactionForm}>
        <Title
          mainText="Permission to Increase Withdrawal Limit"
          subtext="By agreeing to this policy, you are increasing your daily outflow limit to 5 Billion Naira. Every cash-out from your wallet will only be transferred to the account you provide below. This account will be your official withdrawal account."
        />

        {transactionFormStructure.map((section) => (
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
              Withdrawal Increase Terms and Condition Agreement.
              <br />
              Listen to the audio file before agreeing.
            </>
          }
        />

        <div className="actions">
          <button
            type="button"
            onClick={onBack}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Transaction;
