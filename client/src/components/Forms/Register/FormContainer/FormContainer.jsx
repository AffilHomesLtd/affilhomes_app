import FormField from '../FormField/FormField';
import styles from './FormContainer.module.css';
const FormContainer = ({
  title,
  formFields = [{ label: '', type: '', input: {}, options: [] }],
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className={styles.form_fields}>
        {formFields.map((fields) => (
          <FormField
            key={fields.label}
            label={fields.label}
            type={fields.type}
            input={fields.input}
            options={fields.options}
          />
        ))}
      </div>
    </section>
  );
};

export default FormContainer;
