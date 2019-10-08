import React from 'react';
import NavBar from '../components/NavBar';
import styles from '../static/css/indexhead.module.css';
import main_bg from '../static/images/tucker-tangeman-IrtRZ-6HxIE-unsplash.jpg';
import main_bg_big from '../static/images/randy-fath-osXl4JI3vcQ-unsplash.jpg';

function IndexHead() {
  return (
    <header className={styles.page_header}>
      <NavBar />
      <div className={styles.page_head}>
        <div className={styles.page_bg_container}>
          <div className={`${styles.page_bg_filter} ${styles.full_dimension}`}> 
          </div>
          <div
            className={`${styles.page_bg_filter} ${styles.full_dimension} ${styles.page_head_content}`}
          >ddasfddddddddddddddddddddddddd</div>
          <picture>
            <source srcSet={main_bg_big} media="(min-width: 640px)" />
            <img
              className={`${styles.page_bg_image} ${styles.full_dimension}`}
              src={main_bg}
              alt="background"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

export default IndexHead;
