import { useFormContext } from 'react-hook-form';
import styles from './FormField.module.css';

const FormField = ({
  label = '',
  name = '',
  type = 'select',
  input = { type: 'text', placeholder: '' },
  options = [],
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name]?.message;

  return (
    <section
      className={`${styles.field} ${
        input.type === 'checkbox'
          ? styles.checkbox
          : type === 'input'
          ? styles.input
          : styles.select
      }`}>
      <p>{label}</p>

      <div className={styles.fieldType}>
        {type === 'select' ? (
          <select
            id={name}
            {...register(name)}>
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option
                key={option}
                value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            {...input}
            {...register(name)}
          />
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </section>
  );
};

export default FormField;
