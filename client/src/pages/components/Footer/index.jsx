import styles from "./style.module.scss";
import { carList, Customers, service } from "../Layout/nav";
import Link from "next/link";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import { logo } from "./logo";
import { ImFacebook } from "react-icons/im";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { Icons, FooterIcons } from "../ui/Icons";
import CustomLink from "../ui/CustomLink";

const Footer = () => {
  const [email, setEmail] = useState("");
  const change = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <nav className={styles.footer__nav}>
          <div>
            <span>For customers</span>
            {Customers.map((data) => {
              return (
                <CustomLink href={data.href} key={data.id}>
                  {data.title}
                </CustomLink>
              );
            })}
          </div>
          <div>
            <span>Car List</span>
            {carList.map((data) => {
              return (
                <CustomLink href={data.href} key={data.id}>
                  {data.title}
                </CustomLink>
              );
            })}
          </div>
          <div>
            <span>Service</span>
            {service.map((data) => {
              return (
                <CustomLink href={data.href} key={data.id}>
                  {data.title}
                </CustomLink>
              );
            })}
          </div>
        </nav>
        <hr />
        <div className={styles.footer__contact}>
          <div className={styles.footer__phone}>
            <Link href="tel:+971 58 590 7875">+971 58 590 7875</Link>
            <Icons />
          </div>
          <ButtonSecondary cs={styles.footer__contact_btn}>
            Request a callback
          </ButtonSecondary>
          <p>
            24 4th St - Al Quoz - Al Quoz
            <br />
            Industrial Area 3 - Dubai
          </p>
          <form className={styles.footer__input}>
            <input
              type="text"
              id="footer-email"
              onChange={change}
              value={email}
            />
            <label htmlFor="footer-email">Write your E-mail</label>
            <ButtonPrimary cs={styles.footer__input_btn}>Submit</ButtonPrimary>
          </form>
        </div>
      </div>
      <div className={styles.footer__logo}>
        {logo.map((data) => {
          return (
            <Image
              key={data.id}
              src={data.href}
              width={data.w}
              height={data.h}
            />
          );
        })}
      </div>
      <div className={styles.footer__end}>
        <Link href="/">Privacy Policy</Link>
        <span>©2023 TRINITY. All rights reserved</span>
        <div className={styles.footer__icons}>
          <FooterIcons link="/" target="_blank">
            <ImFacebook />
          </FooterIcons>
          <FooterIcons link="/" target="_blank">
            <FaTiktok />
          </FooterIcons>
          <FooterIcons link="/" target="_blank">
            <FaYoutube />
          </FooterIcons>
          <FooterIcons link="/" target="_blank">
            <FaInstagram />
          </FooterIcons>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
