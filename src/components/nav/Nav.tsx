import styles from "./nav.module.css";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const router = useRouter();

  const navigateToDonate = () => {
    router.push("/donate");
  };

  const handleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <span>
          <img className={styles.logo} src="/images/logo.png" alt="logo" />
        </span>
        <span>
          <span>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              onClick={navigateToDonate}
            >
              Donate
            </Button>
          </span>
          {/* <span onClick={handleDrawer}>menu</span> */}
          {/* <Drawer anchor="left" open={showDrawer} /> */}
        </span>
      </div>
    </nav>
  );
}
