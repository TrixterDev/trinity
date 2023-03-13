import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "clsx";
import styles from "./style.module.sass";
import { nav } from "./nav";
import { useState } from "react";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  const [hamburger, setHamburger] = useState(false);
  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState("Выбирите страну");
  let img = "/img/logo.svg";

  const xz = () => {
    setHamburger((hamburger) => !hamburger);
  };

  const dropDown = () => {
    setDrop((drop) => !drop);
  };

  const change = (e) => {
    e.stopPropagation();
    setDrop(false);
    setValue(e.target.textContent);
  };
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div
            onClick={xz}
            className={cn(styles.hamburgerWrap, hamburger && styles.isActive)}
          >
            <span></span>
            <span></span>
          </div>
          {nav.map((data) => {
            return (
              <Link
                href={data.href}
                key={data.id}
                className={asPath === data.href && styles.active}
              >
                {data.title}
              </Link>
            );
          })}
        </nav>
        <Image src={img} alt="logo" width="147" height="139" />
        <nav className={styles.nav}>
          <Link href="tel:+971 58 590 7875">+971 58 590 7875</Link>
          <div className={styles.dropDownWrap}>
            <button onClick={dropDown}>
              {value}
              <Image
                src="/img/arrow.svg"
                width="10"
                height="10"
                className={cn(styles.arrow, drop && styles.arActive)}
                alt=""
              />
            </button>
            <div className={cn(styles.menu, drop && styles.activeDropDown)}>
              <span onClick={change}>Dubai</span>
              <hr />
              <span onClick={change}>Moscow</span>
              <hr />
              <span onClick={change}>Budapest</span>
              <hr />
              <span onClick={change}>Wiesbaden</span>
              <hr />
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
