import React from "react";
import Nav from "../nav/Nav";
import styles from "./page.module.css";

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      <Nav />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
