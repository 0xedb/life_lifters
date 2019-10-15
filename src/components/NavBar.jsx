import React, {useState} from 'react';
import menu from '../static/images/menu.svg';
import close from '../static/images/menu_close.svg';
import styles from '../static/css/navbar.module.css';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = e => {
    setShowMenu(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_content}>
        <div className={styles.nav_item}>one</div>
        <div className={styles.nav_item}>two</div>
        <div
          className={`${styles.nav_item} ${styles.hamburger} ${styles.menu_container}`}
        >
          <img
            className={styles.menu}
            src={showMenu ? close : menu}
            alt="menu"
            onClick={handleMenuClick}
          />
        </div>
      </div>
      <div
        className={styles.menu_overlay}
        style={{width: showMenu ? '100%' : '0px', opacity: showMenu ? 1 : 0}}
        onClick={handleMenuClick}
      >
        <div className={styles.menu_center}>
          <a className={styles.menu_link} href="#about">
            about
          </a>
          <a className={styles.menu_link} href="#programs">
            programs
          </a>
          <a className={styles.menu_link} href="#team">
            team
          </a>
          <a className={styles.menu_link} href="#mentors">
            mentors
          </a>
          <a className={styles.menu_link} href="#gallery">
            gallery
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
