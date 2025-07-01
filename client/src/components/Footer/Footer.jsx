import { FaCircle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <h2>Affilhome</h2>
          <p>The fast lane to your next address.</p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <FaCircle className={styles.icon} /> Terms & Conditions
              </li>
              <li>
                <FaCircle className={styles.icon} /> Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <FaCircle className={styles.icon} /> Customer Service
              </li>
              <li>
                <FaCircle className={styles.icon} /> Help Center
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: support@affilhome.app</li>
              <li>Phone: +234-801-234-5678</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>&copy; {new Date().getFullYear()} Affilhome. All rights reserved.</p>
        <div className={styles.socials}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
