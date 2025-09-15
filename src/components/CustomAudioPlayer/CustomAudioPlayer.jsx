import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import styles from './CustomAudioPlayer.module.css';

const formatTime = (t = 0) => {
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = Math.floor(t % 60);
  const pad = (n) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};

const CustomAudioPlayer = ({ src, onComplete, onProgress }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const playPause = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused || !playing) {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const onTime = () => {
    const a = audioRef.current;
    setCurrent(a.currentTime);
    setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);

    /* 🔑 report every tick (no heavy work here) */
    if (onProgress) onProgress(a.currentTime);
  };

  const onLoaded = () => setDuration(audioRef.current.duration || 0);

  const onEnded = () => {
    setPlaying(false);
    setProgress(100);
    setCurrent(duration);
    if (onComplete) onComplete();
  };

  const onReset = () => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setCurrent(0);
    setProgress(0);
    setPlaying(false);
  };

  /* fallback UI if no src */
  if (!src)
    return (
      <div className={`${styles.player} ${styles.disabled}`}>
        <FaPlay />
        &nbsp;Audio unavailable
      </div>
    );

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={onTime}
        onLoadedMetadata={onLoaded}
        onEnded={onEnded}
      />

      <button
        type="button"
        onClick={playPause}
        aria-label={playing ? 'Pause audio' : 'Play audio'}
        className={styles.iconBtn}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      <div className={styles.timelineWrapper}>
        <div className={styles.timeline}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className={styles.time}>
          {formatTime(current)}/{formatTime(duration)}
        </span>
      </div>

      <button
        type="button"
        onClick={onReset}
        aria-label="Restart audio"
        className={styles.iconBtn}>
        <FaRedo />
      </button>
    </div>
  );
};

export default CustomAudioPlayer;
