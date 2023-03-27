import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.scss";

export const Icons = () => {
  return (
    <div className={styles.wrapIcons}>
      <div className={styles.wrap_telega}>
        <a href="https://t.me/telegram" target="_blank">
          <FaTelegramPlane className={styles.telegram} />
        </a>
      </div>
      <div className={styles.wrap_whats}>
        <a href="wa.me/+971 58 590 7875" target="_blank">
          <FaWhatsapp className={styles.whats} />
        </a>
      </div>
    </div>
  );
};

export const FooterIcons = ({ link, target, children }) => {
  return (
    <a href={link} className={styles.icon} target={target}>
      {children}
    </a>
  );
};
