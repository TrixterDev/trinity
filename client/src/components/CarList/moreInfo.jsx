import { fetchCarById } from "@/api/request";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ButtonPrimary } from "../ui/Button";
import styles from "./style.module.scss";

const MoreInfo = () => {
  const [res, setRes] = useState();
  const { query } = useRouter();
  const { isReady } = useRouter();
  const router = useRouter();

  // setTimeout(isReady && console.log("Dasha chtoto tam"), 3000);

  useEffect(() => {
    fetchCarById(query.id).then((res) => setRes(res.data.attribhttps://vt.tiktok.com/ZS8p7GKQk/utes));
    // Window.addEventListener("keydown", (e) => {
    //   console.log(`Key: ${e.key} with keycode ${e.keyCode} has been pressed`);
    // });
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.info__content}>
        <h2>{res && res.title}</h2>
        <div className={styles.info__list}>
          <div>
            <p>{res && res.horsePower}</p> <span>HorsePower</span>
          </div>
          <div>
            <p>{res && res.engineCapacity}</p> <span>Engine capacity</span>
          </div>
          <div>
            <p>
              {res && res.acceleration}
              <sub>sec</sub>
            </p>
            <span>Acceleration</span>
          </div>
          <div>
            <p>{res && res.type}</p> <span>Type</span>
          </div>
          <div>
            <p>{res && res.drive}</p> <span>Drive</span>
          </div>
          <div>
            <p>{res && res.qos}</p> <span>Quantity of Seats</span>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <h3>Rental Rate</h3>
        <div>
          <span>1-7 day</span>
          <p>{res && res.price_1_7_day}</p>
        </div>
        <div>
          <span>7-14 day</span>
          <p>{res && res.price_7_14_day}</p>
        </div>
        <div>
          <span>14-30 day</span>
          <p>{res && res.price_14_30_day}</p>
        </div>
        <ButtonPrimary>
          Request for a rent <span>{res && res.price_1_7_day}</span>
        </ButtonPrimary>
      </div>
      <img
        src={res && res.img.data.attributes.url}
        alt={res && res.img.data.attributes.name}
      />
    </div>
  );
};

export default MoreInfo;
