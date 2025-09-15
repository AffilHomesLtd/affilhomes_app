import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FiUpload } from 'react-icons/fi'; // ⬅️ NEW
import styles from './FormField.module.css';

const FormField = ({
  label = '',
  name = '',
  type = 'select',
  input = { type: 'text', placeholder: '' },
  options = [],
  optional = false,
  isCheckbox = false,
}) => {
  const {
    register,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext();

  const allValues = getValues();

  useEffect(() => {
    console.log(allValues);
  }, [allValues]);

  const error = errors?.[name]?.message;
  const isFile = input.type === 'file';
  const isImage = isFile && input.accept?.includes('image');
  const fileValue = watch(name);

  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setValue(name, file);
    if (isImage && file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  return (
    <section
      className={`${styles.field}
                  ${isFile ? styles.file : ''}
                  ${isImage ? styles.image : ''}
                  ${isCheckbox ? styles.checkbox : ''}`}>
      {!isCheckbox && (
        <label htmlFor={name}>
          {label}
          {optional && <span className={styles.optional}> (Optional)</span>}
        </label>
      )}

      <div className={styles.fieldType}>
        {type === 'select' && (
          <select
            id={name}
            {...register(name)}>
            <option value="">{`Select ${label}`}</option>
            {options.map((option) => (
              <option
                key={option}
                value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        {/* ---------- CHECKBOX ---------- */}
        {isCheckbox && (
          <>
            <input
              id={name}
              type="checkbox"
              {...register(name)}
            />
            <label htmlFor={name}>{label}</label>
          </>
        )}

        {isFile && (
          <>
            <input
              id={name}
              type="file"
              className={styles.visually_hidden}
              {...input}
              onChange={handleFileChange}
            />

            {/* Preview / filename */}
            {isImage && preview ? (
              <div className={styles.preview}>
                <img
                  src={preview}
                  alt="Preview"
                />
              </div>
            ) : (
              <p className="empty">No file selected</p>
            )}
            {fileValue && !isImage && (
              <p className={styles.filename}>{fileValue.name}</p>
            )}
          </>
        )}

        {!isCheckbox && !isFile && type !== 'select' && (
          <input
            id={name}
            {...register(name)}
            {...input}
            className="visually-hidden"
          />
        )}
      </div>
      {isFile && (
        <label
          htmlFor={name}
          className={styles.uploadButton}>
          <FiUpload />
          <span>Upload {label}</span>
        </label>
      )}

      {error && <span className={styles.error}>{error}</span>}
    </section>
  );
};

export default FormField;
