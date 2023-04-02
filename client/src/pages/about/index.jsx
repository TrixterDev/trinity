import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import style from "./style.module.css";
import BreadCrumps from "@/components/ui/BreadCrumps";
function index() {
  return (
    <div className={style.wrapper}>
      <BreadCrumps />
      <h1 className={style.title}>About Us</h1>
      <div className={style.yearsBlock}>
        <div className={style.yearsBlock__card}>
          <div className={style.yearsBlock__cardNumber}>
            <h4 className={style.test}>8</h4>
            <span className={style.test}>year</span>
          </div>
          <p className={style.yearsBlock__cardDesc}>
            We've come a long way from a 2-people company to winning at Webby's.
          </p>
        </div>
        <div className={style.yearsBlock__card}>
          <div className={style.yearsBlock__cardNumber}>
            <h4 className={style.test}>72</h4>
            <span className={style.test}>cards</span>
          </div>
          <p className={style.yearsBlock__cardDesc}>
            We've come a long way from a 2-people company to winning at Webby's.
          </p>
        </div>
        <div className={style.yearsBlock__card}>
          <div className={style.yearsBlock__cardNumber}>
            <h4 className={style.test}>190</h4>
            <span className={style.test}>people</span>
          </div>
          <p className={style.yearsBlock__cardDesc}>
            We've come a long way from a 2-people company to winning at Webby's.
          </p>
        </div>
      </div>
      <div className={style.comments}>
        <p className={style.gradientText}>
          I’m with cars for over 18 years. My auto passion and attention to
          details will make your experience with us second to none. Guaranteed.
        </p>
        <p className={style.nameText}>
          Kirill Aliev, MBA
          <span>CEO Trinity car rental boutique</span>
        </p>
      </div>
      <Image
        src="/img/about/man-block.jpg"
        className={style.manBlock}
        width={1000}
        height={1000}
      />

      <div className={style.presentBlockContent}>
        <h2>Glad to present you Dubai Get Car</h2>
        <div className={style.presentBlockContent__row}>
          <p className={style.presentBlockContent__rowText}>
            A company founded by a team of professional enthusiasts who have set
            themselves the goal of creating a truly exclusive car rental service
            that is unique for our country. With us, you do not need to spend
            time and money on regular repairs, paying high taxes and seasonal
            storage of your car. You just have to enjoy the indescribable
            emotions from driving the car of your dreams.
          </p>
          <p className={style.presentBlockContent__rowText}>
            Your safety is our most important concern. The strictest control
            over the technical and sanitary-hygienic condition of our vehicles
            is one of the distinctive features and fundamental ideas that guide
            us. We guarantee that any car from the Dubai Get Car vehicle fleet
            will leave a bright mark and unforgettable impressions in your soul.
          </p>
        </div>
        <p className={style.presentBlockContentDesc}>
          We invite you to familiarize yourself with our fleet of vehicles,
          which are extremely rare in full complete sets of brands: McLaren,
          Rolls-Royce, Lamborghini, Ferrari, Bentley, Porsche, Mercedes-Benz,
          etc.
        </p>
      </div>
    </div>
  );
}

export default index;
