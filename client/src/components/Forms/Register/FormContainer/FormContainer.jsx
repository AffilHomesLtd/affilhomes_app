import FormField from '../FormField/FormField';
import styles from './FormContainer.module.css';

const FormContainer = ({ title, formFields = [] }) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.form_fields}>
        {formFields.map((field, index) => {
          if (field.group && Array.isArray(field.fields)) {
            return (
              <div
                key={`group-${index}`}
                className={styles.field_group}>
                {field.fields.map((subField) => (
                  <FormField
                    key={subField.name}
                    {...subField}
                  />
                ))}
              </div>
            );
          }

          return (
            <FormField
              key={field.name}
              {...field}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FormContainer;
