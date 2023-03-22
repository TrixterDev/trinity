import Image from "next/image";
import styles from "./style.module.sass";
import cn from "clsx";
import { useState } from "react";
const DropDown = ({ menu, title, text }) => {
  const [toggle, setToggle] = useState(false);
  const [mess, setMess] = useState(title);

  text && text.push(mess);

  const dropDown = () => {
    setToggle((toggle) => !toggle);
  };

  const changeDrop = (e) => {
    setToggle(false);
    setMess(e.target.textContent);
  };
  return (
    <div className={styles.dropDownWrap}>
      <button onClick={dropDown}>
        {mess}
        <Image
          src="/img/arrow.svg"
          width="10"
          height="10"
          className={cn(styles.arrow, toggle && styles.arActive)}
          alt=""
        />
      </button>
      <div className={cn(styles.menu, toggle && styles.activeDropDown)}>
        {menu.map((item) => {
          return (
            <span className={styles.content} key={item.id} onClick={changeDrop}>
              {item.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
