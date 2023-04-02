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

const Main = () => {
  return (
    <div className={styles.contanier}>
      <video src="https://www.youtube.com/watch?v=34uxHjDLtQg"></video>z
      <div className={styles.card}>
        <div className={styles.lambo}>
          <div className={styles.text}>
            <h3 className={styles.h3}>Rent Lamborghini </h3>
            <h3 className={styles.h3}>Huracan STO</h3>
          </div>

          <div className={styles.text2}>
            <span>Rent is from aed </span>
            <h3 className={styles.h3}>2 400$</h3>
            <span>per day</span>
          </div>
        </div>

        <div className={styles.lambo2}>
          <h2 className={styles.h2}>Most Popular</h2>
          <label className={styles.GoSearch} htmlFor="search">
            <input
              id="search"
              className={styles.input}
              type="text"
              placeholder="Car search"
            />
            <GoSearch className={styles.vector} />
          </label>

          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
              verticalClass: styles.paginate,
              // dynamicBullets: true,
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bulletActive,
            }}
            modules={[Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.SwiperSlide}>
              <h3 className={styles.slideH2}>Lamborghini</h3>
              <p className={styles.slideText}>Huracan EVO Spyder </p>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h3 className={styles.slideH2}>Ferrari</h3>
              <p className={styles.slideText}>Roma </p>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h3 className={styles.slideH2}>Range Roveri</h3>
              <p className={styles.slideText}>Autobiography New 2022 </p>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h3 className={styles.slideH2}>Audi</h3>
              <p className={styles.slideText}>Huracan EVO Spyder RS6 </p>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h3 className={styles.slideH2}>Lamborghini</h3>
              <p className={styles.slideText}>Huracan EVO Spyder </p>
            </SwiperSlide>
          </Swiper>

          <button className={styles.btn3}>View all</button>
        </div>
      </div>
      <div className={styles.nav}>
        <Link href="/" className={styles.list}>
          Special Offer
        </Link>
        <Link href="/" className={styles.list}>
          New car
        </Link>
        <Link href="/" className={styles.list}>
          Most popular
        </Link>
        <Link href="/" className={styles.list}>
          Daily
        </Link>
      </div>
      <div className={styles.grids}>
        <div className={styles.grid}>
          <p className={styles.imgrid}>Lamborghini Urus</p>
          <button className={styles.btn2}>Rent</button>
        </div>
        <div className={styles.grid}>
          <p className={styles.imgrid}>Lamborghini Urus</p>
          <button className={styles.btn2}>Rent</button>
        </div>
        <div className={styles.grid}>
          <p className={styles.imgrid}>Lamborghini Urus</p>
          <button className={styles.btn2}>Rent</button>
        </div>
        <div className={styles.grid}>
          <p className={styles.imgrid}>Lamborghini Urus</p>
          <button className={styles.btn2}>Rent</button>
        </div>
      </div>
      <button className={styles.btn}>View all</button>
      <h1 className={styles.h1}>About Us</h1>
      <div className={styles.flexs}>
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
      <div className={styles.mancars}></div>
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
