import React, {useState} from 'react';
import menu from '../static/images/menu.svg';
import close from '../static/images/menu_close.svg';
import styles from '../static/css/navbar.module.css';
import logo from '../static/images/logo.png';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = e => {
    setShowMenu(prev => !prev);
  };

  const design = {
    first: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      objectFit: 'contain',
      objectPosition: 'center center',
      height: '100%',
      width: '100%',
    },
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_content}>
      <div className={`${styles.nav_item} ${styles.shift}`} style={design.first}>
          <img src={logo} alt="logo" style={design.logo} />
        </div>
        <div className={styles.nav_item} style={design.first}>
          <div className={styles.mid}>
            <a href="#about">
              about
            </a>
            <a href="#work">
              work
            </a>
            <a href="#programs">
              programs
            </a>
            <a href="#team">
              team
            </a>
            <a href="#mentors">
              mentors
            </a>
            <a href="#gallery">
              gallery
            </a>
          </div>
        </div>
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
          <a className={styles.menu_link} href="#work">
            work
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
