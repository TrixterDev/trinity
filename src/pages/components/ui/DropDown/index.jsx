import Image from "next/image";
import React from "react";

const DropDown = () => {
  return (
    <div className={styles.dropDownWrap}>
      <button onClick={dropDown}>
        {messDrop}
        <Image
          src="/img/arrow.svg"
          width="10"
          height="10"
          className={cn(styles.arrow, drop && styles.arActive)}
          alt=""
        />
      </button>
      <div className={cn(styles.menu, drop && styles.activeDropDown)}>
        <span onClick={changeDrop}>Dubai</span>
        <hr />
        <span onClick={changeDrop}>Moscow</span>
        <hr />
        <span onClick={changeDrop}>Budapest</span>
        <hr />
        <span onClick={changeDrop}>Wiesbaden</span>
        <hr />
      </div>
    </div>
  );
};

export default DropDown;
