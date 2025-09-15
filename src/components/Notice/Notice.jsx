import { useState } from 'react';
import { FaVolumeUp, FaRegSquare, FaCheckSquare } from 'react-icons/fa';
import styles from './Notice.module.css';
import CustomAudioPlayer from '../CustomAudioPlayer/CustomAudioPlayer';

const MIN_SECONDS = 10;

const Notice = ({ path = '', checked, setChecked, text }) => {
  const [enabled, setEnabled] = useState(false);

  const handleProgress = (sec) => {
    if (!enabled && sec >= MIN_SECONDS) setEnabled(true);
  };

  const handleComplete = () => {
    setEnabled(true);
    setChecked(true);
  };

  const toggle = () => {
    if (enabled) setChecked((c) => !c);
  };

  return (
    <div className={styles.noticeWrapper}>
      <div className={styles.noticeIcon}>
        <FaVolumeUp />
      </div>

      <div className={styles.noticeBody}>
        <p className={styles.noticeText}>
          {typeof noticeText === 'string' ? text : <>{text}</>}{' '}
        </p>

        <CustomAudioPlayer
          src={path}
          onProgress={handleProgress}
          onComplete={handleComplete}
        />

        <button
          type="button"
          onClick={toggle}
          disabled={!enabled}
          className={`${styles.checkBtn} ${!enabled ? styles.disabled : ''}`}
          aria-pressed={checked}
          aria-label={
            enabled
              ? checked
                ? 'Audio acknowledged'
                : 'Acknowledge you have listened'
              : 'Listen for at least 10 seconds first'
          }>
          {checked ? <FaCheckSquare /> : <FaRegSquare />}
          <span>I have listened to the audio</span>
        </button>
      </div>
    </div>
  );
};

export default Notice;
