import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.sass";
import { nav } from "./nav";
import Hamburger from "../ui/Hamburger";
import DropDown from "../ui/DropDown";
import { country, lang } from "../ui/DropDown/menu";
import CustomLink from "../ui/CustomLink";

const Layout = ({ children }) => {
  let img = "/img/logo.svg";
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Hamburger />
          {nav.map((data) => {
            return (
              <CustomLink
                activeClass={data.href}
                href={data.href}
                key={data.id}
              >
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

          <di className={styles.dropDown}>
            <DropDown title="Country" menu={country} />
            <DropDown title="Lang" menu={lang} />
          </di>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
