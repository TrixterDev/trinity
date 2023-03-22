import Link from "next/link";
import Accordion from "./components/Accordion";
import style from "./style.module.scss";
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
        <div className={ style.breadcrump }>
          <Link className={ style.activeLink } href="#">Main</Link>
          <span> -- </span>
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
      </div>
    </div>
  )
}

export default index