import React from 'react';
import styles from '../static/css/indexfooter.module.css';

function IndexFooter() {
  return (
    <footer className={styles.page_footer}>
      &copy;{new Date().getFullYear()} Life Lifters 
    </footer>
  );
}

export default IndexFooter;
