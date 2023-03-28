import { CiMail } from "react-icons/ci";
import style from "./style.module.scss";

const EndSiteBlocks = () => {
  return (
    <>
      <div className={style.blockMap}>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.95289126827!2d55.08740517489661!3d25.075956713696815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2skg!4v1679623154324!5m2!1sru!2skg"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form action="" className={style.form}>
          <h2>Ask us anything</h2>
          <div className={style.formControl}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="+7 (999) 999 - 99 - 99" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send the request</button>
          </div>
        </form>
      </div>

      <section className={style.feedback}>
        <h2>Get a discount of up to 60%</h2>
        <p>
          Get the latest articles and business updates that you need to know,
          you’ll even get special recommendations weekly.
        </p>
        <div className={style.emailBlock}>
          <div className={style.inputIcon}>
            <CiMail />
            <input type="text" placeholder="Your email" />
          </div>
          <button>Receive</button>
        </div>
      </section>
    </>
  );
};

export default EndSiteBlocks;
