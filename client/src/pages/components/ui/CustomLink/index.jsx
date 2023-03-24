import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import cn from "clsx";

const CustomLink = ({ children, href, activeClass, dubleClass }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={cn(
        `${dubleClass} ${styles.link}`,
        asPath === activeClass && styles.active
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
