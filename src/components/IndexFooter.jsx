import React from 'react';
import styles from '../static/css/indexfooter.module.css';

function IndexFooter() {
  return (
    <footer className={styles.page_footer}>
      &copy; Life Lifters {new Date().getFullYear()}
    </footer>
  );
}

export default IndexFooter;
