import styles from './Title.module.css';
const Title = ({ mainText = '', subtext = '' }) => {
  return (
    <div className={styles.title}>
      <h1>{mainText}</h1>
      <p>{subtext}</p>
      <hr />
    </div>
  );
};

export default Title;
