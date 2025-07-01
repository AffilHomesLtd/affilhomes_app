import React from 'react';
import { sidebarLinks } from '../../constants/sidebarLinks';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { MdLogin } from 'react-icons/md';
const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <ul className={styles.sidebar_links}>
        {sidebarLinks.map(({ label, icon, path }) => {
          const Icon = icon;
          return (
            <NavLink
              key={label}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
              }
              to={path}>
              <li>
                <Icon />
                <p>{label}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
      <div className={styles.sidebar_bottom}>
        <p>
          Become an Agent
          <br />
          Register your estate
        </p>
        <button className={styles.signout}>
          <MdLogin />
          <p>Sign Out</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
