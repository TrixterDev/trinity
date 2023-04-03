import styles from "./style.module.scss";

export const ButtonPrimary = ({ children, cs, click }) => {
  return (
    <button
      className={`${styles.btn__primary} ${styles.btn} ${cs}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ children, cs, click }) => {
  return (
    <button
      className={`${styles.btn__secondary} ${styles.btn} ${cs}`}
      onClick={click}
    >
      {children}
    </button>
  );
};
