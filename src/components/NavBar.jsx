import React, {useState} from 'react';
import menu from '../static/images/menu.svg';
import close from '../static/images/menu_close.svg';
import styles from '../static/css/navbar.module.css';
import logo from '../static/images/logo.png';
import {Link} from 'gatsby';

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
            <Link to="#about">
              about
            </Link>
            <Link to="#work">
              work
            </Link>
            <Link to="#programs">
              programs
            </Link>
            <Link to="#team">
              team
            </Link>
            <Link to="#mentors">
              mentors
            </Link>
            <Link to="#gallery">
              gallery
            </Link>
            <Link to="/donate">
              donate
            </Link>
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
          <Link className={styles.menu_link} to="#about">
            about
          </Link>
          <Link className={styles.menu_link} to="#work">
            work
          </Link>
          <Link className={styles.menu_link} to="#programs">
            programs
          </Link>
          <Link className={styles.menu_link} to="#team">
            team
          </Link>
          <Link className={styles.menu_link} to="#mentors">
            mentors
          </Link>
          <Link className={styles.menu_link} to="#gallery">
            gallery
          </Link>
          <Link className={styles.menu_link} to="/donate">
            donate
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
