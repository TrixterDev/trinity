/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styles from "./style.module.scss";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import { useParamContext } from "@/context";
import CarList from "../CarList";
import About from "../About";
import { ButtonPrimary } from "../ui/Button";
import { useRouter } from "next/router";
import { fetchReviews } from "@/api/request";
import Video from "../Video";

const Main = () => {
  const [res, setRes] = useState();
  const { country } = useParamContext();
  const router = useRouter();
  const [btn, setBtn] = useState(false);
  const [src, setSrc] = useState();

  const toggle = (src) => {
    setSrc(src);
    setBtn((btn) => !btn);
  };

  useEffect(() => {
    fetchReviews().then((res) => setRes(res.data));
  }, []);

  return (
    <div className={styles.contanier}>
      <div className={styles.banner}>
        <Image src="/img/home/banner.png" width={1920} height={1080} />
        <h1 className={styles.title}>{country}</h1>
        <p>Luxury car rental</p>
      </div>
      <CarList />
      <ButtonPrimary click={() => router.push("/carList")} cs={styles.btn}>
        View all
      </ButtonPrimary>
      <About />

      <h2 className={styles.h6}>Reviews</h2>
      {res &&
         res.map((res, i) => {
          console.log(src && src);
          return (
            <div>
              <img
                width={476}
                height={740}
                onClick={() =>
                  toggle(res.attributes.video.data[0].attributes.url)
                }
                src={res.attributes.prew.data[0].attributes.formats.small.url}
              />
            </div>
          );
        })}
      {btn && <Video src={src && src} />}
      <h2 className={styles.h6}>Advantages</h2>
      <div className={styles.grigContainer}>
        <div className={styles.gridItem}>
          <p className={styles.text5}>
            Delivery and return <br /> of cars in Dubai 24/7
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className={styles.text5}>
            Delivery and return <br /> of cars in Dubai 24/7
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className={styles.text5}>
            Delivery and return <br /> of cars in Dubai 24/7
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className={styles.text5}>
            Delivery and return <br /> of cars in Dubai 24/7
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className={styles.text5}>
            Delivery and return <br /> of cars in Dubai 24/7
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className={styles.text5}>
            Delivery and return <br /> of cars in Dubai 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
