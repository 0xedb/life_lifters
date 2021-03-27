import React from "react";
import styles from "./main.module.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Mid from "./Mid";

export default function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <div className={styles.group}>
          <div className={styles.words}>
            <Typography variant="h1" paragraph>
              Scholarship. Health. Excellence
            </Typography>
            <Typography variant="body1">
              We are a women empowerment incubator that seeks to build the next
              generation of economically empowred women in Africa
            </Typography>
            <br />
            <Button size="large" variant="contained" color="secondary">
              Donate
            </Button>
          </div>
          <div className={styles.img}>
            <img src="/images/bg_main.jpg" />
          </div>
        </div>
        <Mid />
      </div>
    </section>
  );
}
