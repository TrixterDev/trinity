/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
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

const Main = () => {
  const { country } = useParamContext();
  return (
    <div className={styles.contanier}>
      <div className={styles.banner}>
        <Image src="/img/home/banner.png" width={1920} height={1080} />
        <h1>{country}</h1>
        <p>Luxury car rental</p>
      </div>
      <CarList />
      <button className={styles.btn}>View all</button>
      {/* <h1 className={styles.h1}>About Us</h1> */}
      {/* <div className={styles.flexs}>
        <div className={styles.wfl}>
          <div className={styles.flex}>
            <span className={styles.flexNumber}>
              <Image
                className={styles.flexNumber1}
                src="/public/img_Ch/mumber1.png"
                alt=""
                width={100}
                height={120}
              />
            </span>
            <p className={styles.fleximg}>year</p>
          </div>
          <p className={styles.text3}>
            We ve come a long way from a 2-people <br />
            company to winning at Webby s.{" "}
          </p>
        </div>

        <div className={styles.wfl}>
          <div className={styles.flex}>
            <span className={styles.flexNumber}>
              <Image
                className={styles.flexNumber1}
                src="/public/img_Ch/mumber1.png"
                alt=""
                width={100}
                height={120}
              />
            </span>
            <p className={styles.fleximg}>cars</p>
          </div>
          <p className={styles.text3}>
            We ve come a long way from a 2-people <br />
            company to winning at Webby s.{" "}
          </p>
        </div>

        <div className={styles.wfl}>
          <div className={styles.flex}>
            <span className={styles.flexNumber}>
              <Image
                className={styles.flexNumber1}
                src="/public/img_Ch/mumber1.png"
                alt=""
                width={120}
                height={120}
              />
            </span>
            <p className={styles.fleximg}>people</p>
          </div>
          <p className={styles.text3}>
            We ve come a long way from a 2-people <br />
            company to winning at Webby s.{" "}
          </p>
        </div>
      </div>
      <h4 className={styles.text4}>
        I’m with cars for over 18 years. My auto passion <br /> and attention to
        details will make your <br /> experience with us second to none.
        Guaranteed.
      </h4>
      <div className={styles.mancars}></div> */}
      <h2 className={styles.h6}>Reviews</h2>
      <div className={styles.flexContainer}>
        <div className={styles.slide + " " + styles.slide1}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide + " " + styles.active}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
      </div>
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
