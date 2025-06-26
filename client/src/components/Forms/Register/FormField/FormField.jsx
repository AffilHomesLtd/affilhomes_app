import styles from './FormField.module.css';
const FormField = ({
  label = '',
  type = 'select',
  input = { type: 'text', placeholder: '' },
  options = [],
}) => {
  return (
    <section
      className={`${styles.field} ${
        input.type === 'checkbox'
          ? styles.checkbox
          : type === 'input' && styles.input
        // : styles.select
      }`}>
      <p>{label}</p>
      <div className={styles.fieldType}>
        {type === 'select' ? (
          <select>
            <option
              value=""
              disabled>
              Select {label}
            </option>
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
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </div>
    </section>
  );
};

export default FormField;
