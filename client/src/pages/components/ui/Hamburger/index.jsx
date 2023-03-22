import React, { useState } from "react";
import cn from "clsx";
import styles from "./style.module.sass";
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
      {hamburger && <HamburgerMenu toggle={click} />}
    </>
  );
};

export default Hamburger;
