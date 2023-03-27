import Link from "next/link";
import { nav } from "./nav";
import styles from "./style.module.scss";
import CustomLink from "../CustomLink";
import { Icons } from "../Icons";
import { useContexts } from "@/context";

const HamburgerMenu = () => {
  const { hamburgerTogggle } = useContexts();

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {nav.map((data) => {
            return (
              <CustomLink
                href={data.href}
                key={data.id}
                activeClass={data.href}
                dubleClass={styles.font}
                click={hamburgerTogggle}
              >
                {data.title}
              </CustomLink>
            );
          })}
        </div>
      </div>
      <div className={styles.content}>
        <hr />
        <div className={styles.content_info}>
          <p>
            24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai
          </p>
          <div className={styles.wrapIcons}>
            <Link href="tel:+971 58 590 7875">+971 58 590 7875</Link>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
