import styles from './SunburstLoader.module.css';
import { FiLoader } from 'react-icons/fi';
const SunburstLoader = () => {
  return (
    <div className={styles.loader_container}>
      <FiLoader color="white" />
    </div>
  );
};

export default SunburstLoader;
