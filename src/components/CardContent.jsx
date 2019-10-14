import React from 'react';
import styles from '../static/css/cardcontent.module.css';

function CardContent({icon, title, description, just, round, name}) {
  const design = round ? styles.card_icon_round : styles.card_icon;
  const card = round ? styles.card_round : styles.card;
  const headings = round ? <h2>{name}</h2> : <></>;

  return (
    <div className={card}>
      <div>
        {icon ? (
          <div className={styles.card_icon_container}>
            <img className={design} src={icon} alt={title} />
          </div>
        ) : (
          null
        )}
        <div>
          {headings}
          <h3>{title}</h3>
        </div>
      </div>
      <div style={{textAlign: just}} className={styles.card_description}>
        {description}
      </div>
    </div>
  );
}

export default CardContent;
