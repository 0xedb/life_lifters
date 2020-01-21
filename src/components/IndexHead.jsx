import React from 'react';
import NavBar from '../components/NavBar';
import styles from '../static/css/indexhead.module.css';
import main_bg from '../static/images/main_bg_mobile_0.jpg';
import main_bg_big from '../static/images/main_bg_desktop.jpg';
import empower_girls from '../static/images/empower_girls.jpg';

function IndexHead() {
  return (
    <header className={styles.page_header}>
      <NavBar />
      <div className={styles.page_head}>
        <div className={styles.page_bg_container}>
          <div
            className={`${styles.page_bg_filter} ${styles.full_dimension}`}
          ></div>
          <div
            className={`${styles.page_bg_filter} ${styles.full_dimension} ${styles.page_head_content}`}
          >
            <div className={styles.centered}>
              <h1>
                When you educate a woman you set her free
                <span className={styles.author_set}>~ Oprah Winfrey</span>
              </h1>
              We are unapologetic women rights activists
            </div>
          </div> 
            <img
              className={`${styles.page_bg_image} ${styles.full_dimension}`}
              src={main_bg}
              alt="background"
            /> 
        </div>
      </div>
      <div className={`${styles.flex_center} ${styles.real_center}`}>
        <img
          className={styles.empower_girls}
          src={empower_girls}
          alt="empower girls"
        />
        <p
          style={{padding: '2px 20px', textAlign: 'center', maxWidth: '430px'}}
        >
          We believe in quality and not quantity. We understand that our power
          lies in empowering and equipping one girl at a time
        </p>
      </div>
    </header>
  );
}

export default IndexHead;
