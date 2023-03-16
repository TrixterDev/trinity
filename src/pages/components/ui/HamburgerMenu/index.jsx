import Link from "next/link";
import { nav } from "./nav";
import styles from "./style.module.scss";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import CustomLink from "../CustomLink";
import Icons from "../Icons";

const HamburgerMenu = () => {
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
              >
                {data.title}
              </CustomLink>
            );
          })}
        </div>
      </div>
      <hr />
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <p>24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai</p>
          </div>
          <div className={styles.wrap_icons}>
            <Link href="tel:+971 58 590 7875">+971 58 590 7875</Link>
            <Icons nameClass={styles.wrap_telega}>
              <FaTelegramPlane className={styles.telegram} />
            </Icons>
            <Icons nameClass={styles.wrap_what}>
              <FaWhatsapp className={styles.whats} />
            </Icons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
