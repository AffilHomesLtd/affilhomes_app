import styles from './BtnLoader.module.css';

const BtnLoader = ({
  position = 'center',
  borderWidth = '2px',
  borderColor = '#fff',
  size = '10px',
  containerStyle = {},
  duration = 1,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: position,
        alignItems: 'center',
        height: '100%',
        ...containerStyle,
      }}>
      <div
        className={styles.loader}
        style={{
          border: `${borderWidth} solid transparent`,
          borderTop: `${borderWidth} solid ${borderColor}`,
          width: size,
          height: size,
          animationDuration: duration + 's',
        }}></div>
    </div>
  );
};

export default BtnLoader;
