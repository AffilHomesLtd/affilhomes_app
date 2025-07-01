import { FormContainer } from '../../../../components/Forms';
import Title from '../../Title/Title';
import styles from './PersonalInfo.module.css';

const PersonalInfo = () => {
  const personalInfoInputsFields = [
    {
      title: 'Personal Info',
      fields: [
        { type: 'select', label: 'Gender', options: ['Male', 'Female'] },
        { type: 'select', label: 'Title', options: ['Mrs', 'Mr', 'Miss'] },
        {
          type: 'input',
          label: 'First Name',
          input: { type: 'text', placeholder: 'e.g. John' },
        },
        {
          type: 'input',
          label: 'Other Name',
          input: { type: 'text', placeholder: 'e.g. Smith' },
        },
        {
          type: 'input',
          label: 'Last Name',
          input: { type: 'text', placeholder: 'e.g. Doe' },
        },
        {
          type: 'input',
          label: 'Date of Birth',
          input: { type: 'date', placeholder: 'e.g. Doe' },
        },
        {
          type: 'input',
          label: 'Not a Nigerian',
          input: { type: 'checkbox', placeholder: 'e.g. Doe' },
        },
        {
          type: 'input',
          label: 'Nationality',
          input: { type: 'text', placeholder: 'e.g. Nigerian' },
        },
        {
          type: 'input',
          label: 'State',
          input: { type: 'text', placeholder: 'WHich state are you from?' },
        },
        {
          type: 'input',
          label: 'Town',
          input: { type: 'text', placeholder: 'Which town are you from?' },
        },
        {
          type: 'input',
          label: 'LGA',
          input: { type: 'text', placeholder: 'Local Government Area' },
        },
        {
          type: 'input',
          label: 'Tax ID. No. (TIN) (Optional)',
          input: { type: 'text', placeholder: 'e.g. 43434343' },
        },
        {
          type: 'select',
          label: 'Religion (Optional)',
          options: ['Christian', 'Muslim', 'Others'],
        },
      ],
    },
    {
      title: 'Contact Details',
      fields: [
        {
          type: 'input',
          label: 'House Number',
          input: { type: 'text', placeholder: 'e.g. No 31' },
        },
        {
          type: 'input',
          label: 'Street Name',
          input: { type: 'text', placeholder: 'e.g Mark street' },
        },
        {
          type: 'input',
          label: 'City/Town',
          input: { type: 'text', placeholder: 'e.g. Landmark City' },
        },
        {
          type: 'input',
          label: 'L.G.A',
          input: {
            type: 'text',
            placeholder: 'e.g. Landmark Local Government',
          },
        },
        {
          type: 'input',
          label: 'State',
          input: {
            type: 'text',
            placeholder: 'e.g. Lagos state',
          },
        },
      ],
    },
  ];
  return (
    <div className={styles.personal_info}>
      <Title
        mainText="Customer Info"
        subtext="There valued customer we are glad to help you sell, buy, rent and manage your real estate properties, but for you to proceed we have to ensure that your are eligible. Please do well to contact us when ever you encounter any difficulty during vetting process. Thank you for choosing Affilhomes LTD."
      />
      <form className='form-container'>
        {personalInfoInputsFields.map((form) => (
          <FormContainer
            key={form.title}
            title={form.title}
            formFields={form.fields}
          />
        ))}
      </form>
    </div>
  );
};

export default PersonalInfo;
