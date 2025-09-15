import { useNavigate, useOutletContext } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import Title from '../../Title/Title';
import styles from './PersonalInfo.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormContainer } from '../../../../components/Forms';
import { useEffect } from 'react';

const personalInfoInputsFields = [
  {
    title: 'Personal Info',
    fields: [
      {
        type: 'select',
        label: 'Gender',
        name: 'gender',
        options: ['Male', 'Female'],
        required: true,
      },
      {
        type: 'select',
        label: 'Title',
        name: 'title',
        options: ['Mrs', 'Mr', 'Miss'],
        required: true,
      },
      {
        group: true,
        fields: [
          {
            type: 'input',
            label: 'First Name',
            name: 'firstName',
            input: { type: 'text', placeholder: 'e.g. John' },
          },
          {
            type: 'input',
            label: 'Other Name',
            name: 'otherName',
            input: { type: 'text', placeholder: 'e.g. Smith' },
          },
          {
            type: 'input',
            label: 'Last Name',
            name: 'lastName',
            input: { type: 'text', placeholder: 'e.g. Doe' },
          },
        ],
      },
      {
        type: 'input',
        label: 'Date of Birth',
        name: 'dateOfBirth',
        input: { type: 'date' },
      },
      {
        type: 'input',
        label: 'Not a Nigerian?',
        name: 'notNigerian',
        input: { type: 'checkbox' },
        isCheckbox: true,
      },
      {
        type: 'input',
        label: 'Nationality',
        name: 'nationality',
        input: { type: 'text', placeholder: 'e.g. Nigerian' },
      },
      {
        group: true,
        fields: [
          {
            type: 'input',
            label: 'State',
            name: 'state',
            input: { type: 'text' },
          },
          {
            type: 'input',
            label: 'Town',
            name: 'town',
            input: { type: 'text' },
          },
          {
            type: 'input',
            label: 'LGA',
            name: 'lga',
            input: { type: 'text' },
          },
        ],
      },
      {
        type: 'input',
        label: 'Tax ID (TIN)',
        name: 'tin',
        input: { type: 'text', placeholder: 'Optional' },
        optional: true,
      },
      {
        type: 'select',
        label: 'Religion',
        name: 'religion',
        options: ['Christian', 'Muslim', 'Others'],
        optional: true,
      },
    ],
  },
  {
    title: 'Contact Details',
    fields: [
      {
        group: true,
        fields: [
          {
            type: 'input',
            label: 'House Number',
            name: 'houseNumber',
            input: { type: 'number' },
          },
          {
            type: 'input',
            label: 'Street Name',
            name: 'streetName',
            input: { type: 'text' },
          },
          {
            type: 'input',
            label: 'City/Town',
            name: 'city',
            input: { type: 'text' },
          },
        ],
      },
      {
        group: true,
        fields: [
          {
            type: 'input',
            label: 'LGA',
            name: 'contactLga',
            input: { type: 'text' },
          },
          {
            type: 'input',
            label: 'State',
            name: 'contactState',
            input: { type: 'text' },
          },
        ],
      },
    ],
  },
];

const FORM_STORAGE_KEY = 'register.personalInfo';

const schema = yup.object().shape({
  gender: yup.string().required(),
  title: yup.string().required(),
  firstName: yup.string().required(),
  otherName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  notNigerian: yup.boolean(),
  nationality: yup.string().required(),
  state: yup.string().required(),
  town: yup.string().required(),
  lga: yup.string().required(),
  tin: yup.string().nullable(),
  religion: yup.string().nullable(),

  houseNumber: yup.string().required(),
  streetName: yup.string().required(),
  city: yup.string().required(),
  contactLga: yup.string().required(),
  contactState: yup.string().required(),
});

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { markStepCompleted, currentStepIndex } = useOutletContext();

  const storedValues = JSON.parse(
    localStorage.getItem(FORM_STORAGE_KEY) || '{}'
  );

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: '',
      title: '',
      firstName: '',
      otherName: '',
      lastName: '',
      dateOfBirth: '',
      notNigerian: false,
      nationality: '',
      state: '',
      town: '',
      lga: '',
      tin: '',
      religion: '',
      houseNumber: '',
      streetName: '',
      city: '',
      contactLga: '',
      contactState: '',
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
    console.log('Form Submitted:', data);
    localStorage.removeItem(FORM_STORAGE_KEY);
    markStepCompleted(currentStepIndex);
    navigate('/auth/register/kyc');
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.personal_info}>
      <Title
        mainText="Customer Info"
        subtext="Dear valued customer, we are glad to help you sell, buy, rent, and manage your real estate properties. Before proceeding, we must ensure your eligibility. Please reach out if you encounter any difficulty during the vetting process. Thank you for choosing Affilhomes LTD."
      />

      <FormProvider {...methods}>
        <form
          className="form-container"
          onSubmit={methods.handleSubmit(onSubmit)}>
          {personalInfoInputsFields.map((form) => (
            <FormContainer
              key={form.title}
              title={form.title}
              formFields={form.fields}
            />
          ))}
          <div className="actions">
            <button
              type="button"
              onClick={onBack}>
              Back
            </button>
            <button type="submit">Next Step</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalInfo;
