import React, { useState } from "react";
import cn from "clsx";
import styles from "./style.module.sass";
import HamburgerMenu from "../HamburgerMenu";

const Hamburger = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerTogggle = () => {
    setHamburger((hamburger) => !hamburger);
  };
  return (
    <>
      <div
        onClick={hamburgerTogggle}
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
