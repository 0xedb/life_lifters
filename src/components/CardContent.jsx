import React from 'react';
import styles from '../static/css/cardcontent.module.css';

function CardContent({icon, title, description, just}) {
  return (
    <div className={styles.card}>
      <div>
        {icon ? (
          <div className={styles.card_icon_container}>
            <img className={styles.card_icon} src={icon} alt={title} />
          </div>
        ) : (
          <></>
        )}
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div style={{textAlign: just}} className={styles.card_description}>{description}</div>
    </div>
  );
}

export default CardContent;
