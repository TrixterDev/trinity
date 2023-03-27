import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import Hamburger from "../ui/Hamburger";
import DropDown from "../ui/DropDown";
import { country, lang } from "../ui/DropDown/menu";
import CustomLink from "../ui/CustomLink";
import { useState } from "react";
import { useContexts } from "@/context";
import { nav } from "../Layout/nav";
import HamburgerMenu from "../ui/HamburgerMenu";

const Header = () => {
  const [text, setText] = useState([]);

  const { hamburger, hamburgerTogggle } = useContexts();

  let img = "/img/logo.svg";
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Hamburger hamburger={hamburger} click={hamburgerTogggle} />
        {nav.map((data) => {
          return (
            <CustomLink activeClass={data.href} href={data.href} key={data.id}>
              {data.title}
            </CustomLink>
          );
        })}
      </nav>
      <Image
        className={styles.logo}
        src={img}
        alt="logo"
        width="147"
        height="139"
      />
      <nav className={styles.nav}>
        <Link href="tel:+971 58 590 7875">+971 58 590 7875</Link>

        <div className={styles.dropDown}>
          <DropDown text={text} title="Country" menu={country} />
          <DropDown title="Lang" menu={lang} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
