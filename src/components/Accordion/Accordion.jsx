import React, { useState } from 'react'
import './Accordion.scss';

function Accordion({title, borderBot ,children}) {
  let [active, setActive] = useState(true)

  const handleAccordionClick = () => {
    setActive(active => !active)
  }

  return (
    <>
      <div className={`${borderBot ? 'accordion__border-bot' : 'accordion__header'}`}>
        <button className={`${borderBot ? 'accordion-bottom' : 'accordion'}`} onClick={handleAccordionClick}>
          <p className="accordion__title">{title}</p>
          <div className="accordion__btn">
            { active ?
              <img className="arrow-up" src="assets/icon/arrow-up.svg" alt="img-arrow"/>
              :
              <img className="arrow-down" src="assets/icon/arrow-down.svg" alt="img-arrow"/>
            }
          </div>
        </button>
      </div>
      { active &&
        <>
          {children}
        </> 
      }
    </>
  )
}

export default Accordion