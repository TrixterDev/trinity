import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [img, setImg] = useState("/img/logo.svg");

  return (
    <>
      {/* <Image src={img} width="140" height="150" /> */}
      <h1>Home page</h1>
    </>
  );
}
