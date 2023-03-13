import React, { useState } from "react";
import cn from "clsx";
import styles from "./style.module.sass";

const Hamburger = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerTogggle = () => {
    setHamburger((hamburger) => !hamburger);
  };
  return (
    <div
      onClick={hamburgerTogggle}
      className={cn(styles.hamburgerWrap, hamburger && styles.isActive)}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
