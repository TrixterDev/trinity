import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import style from "./style.module.scss";

const BreadCrumps = () => {
  const { asPath } = useRouter();
  return (
    <div className={style.breadcrumb}>
      <Link className={style.activeLink} href="/">
        Main
      </Link>
      <MdOutlineKeyboardDoubleArrowRight />
      <Link href={asPath}>{asPath.substring(1)}</Link>
    </div>
  );
};

export default BreadCrumps;
