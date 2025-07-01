import React, { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';
import { getRandomQuote } from '../../utils/helpers';
const PageLoader = () => {
  const [quote, setQuote] = useState('');
  // useEffect
  useEffect(() => {
    setQuote(getRandomQuote());
    const quoteInterval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 3000);
    return () => {
      clearInterval(quoteInterval);
    };
  }, []);
  return (
    <div className={styles.loader_container}>
      <div className={styles.quotes}>
        <p>{quote.content}</p>
        <div className={styles.quote_by}>
          <hr />
          <p>{quote.by}</p>
          <hr />
        </div>
      </div>
      <div className={styles.loader}></div>
      <div className={styles.message}>Please wait. Page is Loading....</div>
    </div>
  );
};

export default PageLoader;
