import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "clsx";

import styles from "./style.module.sass";
import { nav } from "./nav";
import { useState } from "react";
import Hamburger from "../ui/Hamburger";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  const [drop, setDrop] = useState(false);
  const [lang, setLang] = useState(false);
  const [messDrop, setMessDrop] = useState("Выбирите страну");
  const [messLang, setMessLang] = useState("Выбирите язык");
  let img = "/img/logo.svg";

  const dropDown = () => {
    setDrop((drop) => !drop);
  };

  const langDrop = () => {
    setLang((lang) => !lang);
  };

  const changeDrop = (e) => {
    setDrop(false);
    setMessDrop(e.target.textContent);
  };

  const changeLang = (e) => {
    setLang(false);
    setMessLang(e.target.textContent);
  };
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Hamburger />
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
            <button onClick={langDrop}>
              {messLang}
              <Image
                src="/img/arrow.svg"
                width="10"
                height="10"
                className={cn(styles.arrow, lang && styles.arActive)}
                alt=""
              />
            </button>
            <div className={cn(styles.menu, lang && styles.activeDropDown)}>
              <span onClick={changeLang}>ENG</span>
              <hr />
              <span onClick={changeLang}>RUS</span>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
