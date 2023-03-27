import styles from "./style.module.scss";

export const ButtonPrimary = ({ children, cs }) => {
  return (
    <button className={`${styles.btn__primary} ${styles.btn} ${cs}`}>
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ children, cs }) => {
  return (
    <button className={`${styles.btn__secondary} ${styles.btn} ${cs}`}>
      {children}
    </button>
  );
};
