import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

import styles from "./header.module.css";

import SideNav from "./SideNav/sideNav";

const Header = props => {
  const navBars = () => (
    <div className={styles.bars}>
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: "#dfdfdf",
          padding: "10px",
          cursor: "pointer"
        }}
      />
    </div>
  );

  const logo = () => (
    <Link to="/" className={styles.logo}>
      <img alt="nba logo" src="/images/nba_logo.png" />
    </Link>
  );

  return (
    <header className={styles.header}>
      <SideNav {...props} />
      <div className={styles.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
