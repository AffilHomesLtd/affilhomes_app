import React, { useEffect, useState } from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { LuWallet } from 'react-icons/lu';
import { RiHome5Line, RiMessengerLine, RiUser3Line } from 'react-icons/ri';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo_affilhome.png';
import { MdMenu } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [screen, setScreen] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    setIsMobile(screen <= 768);
    return () => window.removeEventListener('resize', handleResize);
  }, [screen]);

  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo_container}>
        <NavLink to="/">
          <img
            src={logo}
            alt="logo_affilhome"
          />
        </NavLink>
      </div>
      <div className={`${styles.wallet} ${styles.navlist}`}>
        <LuWallet />
        <p>Wallet account: 2518906655</p>
      </div>
      <div className={styles.contents}>
        {!isMobile && (
          <>
            <div className={`${styles.message} ${styles.navlist}`}>
              <RiMessengerLine />
              <p>Messages</p>
            </div>
            <div className={`${styles.search_property} ${styles.navlist}`}>
              <RiHome5Line />
              <p>Search Property</p>
            </div>
            <div className={`${styles.help} ${styles.navlist}`}>
              <HiOutlineChatBubbleLeftRight />
              <p>Need help?</p>
            </div>
          </>
        )}
        <div
          className={`${styles.account} ${styles.navlist}`}
          onClick={() => navigate('/auth')}>
          <RiUser3Line />
          <p>Account</p>
        </div>
        {isMobile && (
          <div className={`${styles.menu} ${styles.navlist}`}>
            <MdMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
