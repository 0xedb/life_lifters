import React from 'react';
import styles from '../static/css/indexcontent.module.css';

function IndexConent() {
  return (
    <main>
      <div className={`${styles.centered} ${styles.content_head}`}>
        Our Vision
      </div>
      <section className={styles.centered}>
        To create sustainable, economically, and socially empowered society that
        brings up healthy generations
      </section>
      <section>Our Work</section>
      <section>Team</section>
      <aside>Gallery</aside>
    </main>
  );
}

export default IndexConent;
