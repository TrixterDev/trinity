import Link from "next/link";
import Accordion from "./components/Accordion";
import style from "./style.module.scss";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import {CiMail} from "react-icons/ci";
function index() {

  const accordionData = [
    {
      title: 'Requirements for Customers',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
    {
      title: 'How can I add another driver?',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
    {
      title: 'Can I order delivery or return of a car?',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
    {
      title: 'Where can I use a rented car?',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
    {
      title: 'Are there any extra charges?',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
    {
      title: 'How can I book a car?',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
    {
      title: 'What is not allowed when renting a car?',
      content: 'For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
    },
  ];


  return (
    <div>
      <div className={ style.wrapper }>
        <div className={ style.breadcrumb }>
          <Link className={ style.activeLink } href="#">Main</Link>
          <span> <MdOutlineKeyboardDoubleArrowRight/> </span>
          <Link href="#">Conditions</Link>
        </div>
        <div className={ style.contentBlock }>
          <h1 className={ style.title }>Car rental conditions</h1>
          <p className={ style.desc }>Requirements for Customers</p>
        </div>
        <div className={ style.yearBlock }>
          <div className={ style.yearBlock__number }>
            From <span>19</span> y.o.
          </div>
          <div className={ style.line }></div>
          <div className={ style.yearBlock__number }>
            From <span>19</span> y.o.
          </div>
        </div>

        <div className={ style.accordionBlock }>
          { accordionData.map(({ title, content }) => (
            <Accordion title={ title } content={ content } />
          )) }
        </div>

        <div className={ style.blockMap }>
          <div className={style.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.95289126827!2d55.08740517489661!3d25.075956713696815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2skg!4v1679623154324!5m2!1sru!2skg"
              width="600" height="450" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <form action="" className={style.form}>
            <h2>Ask us anything</h2>
            <div className={style.formControl}>
              <input type="text" placeholder="Name"/>
              <input type="text" placeholder="E-mail"/>
              <input type="text" placeholder="+7 (999) 999 - 99 - 99"/>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
              <button type="submit">Send the request</button>
            </div>
          </form>
        </div>

        <section className={style.feedback}>
          <h2>Get a discount of up to 60%</h2>
          <p>
            Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.
          </p>
          <div className={style.emailBlock}>
            <div className={style.inputIcon}>
              <CiMail/>
              <input type="text" placeholder="Your email"/>
            </div>
            <button>Receive</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default index
