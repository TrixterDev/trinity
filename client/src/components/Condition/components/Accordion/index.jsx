import { useState } from 'react';
import style from "./style.module.scss";
function index({ title, content }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={ style.wrapper }>
      <div className={ style.blockAccordion }>
        <div className={ style.blockAccordion__action } onClick={ () => setIsActive(!isActive) }>
          <h2 className={ style.blockAccordion__title }>{ title }</h2>
          <button className={ style.blockAccordion__close }>{ isActive ? '-' : '+' }</button>
        </div>
        { isActive && <p className={ style.blockAccordion__desc }>{ content }</p> }
      </div>
    </div>
  )
}

export default index