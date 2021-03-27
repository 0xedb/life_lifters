import styles from "./nav.module.css";
import Button from "@material-ui/core/Button";
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <span>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/images/logo.png" alt="logo" />
            </a>
          </Link>
        </span>

        <span>
          <span>
            <Link href="/donate">
              <Button size="medium" variant="outlined" color="primary">
                Donate
              </Button>
            </Link>
          </span>
        </span>
      </div>
    </nav>
  );
}
