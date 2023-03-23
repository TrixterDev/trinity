import React, { useState } from "react";
import cn from "clsx";
import styles from "./style.module.scss";
import HamburgerMenu from "../HamburgerMenu";

const Hamburger = ({ hamburger, click }) => {
  return (
    <>
      <div
        onClick={click}
        className={cn(styles.hamburgerWrap, hamburger && styles.isActive)}
      >
        <span></span>
        <span></span>
      </div>
      {hamburger && <HamburgerMenu />}
    </>
  );
};

export default Hamburger;
