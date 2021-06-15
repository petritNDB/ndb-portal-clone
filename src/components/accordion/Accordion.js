import React, { useState } from "react"

import { Data } from "./Data"
import openIcon from "../../assets/images/icons/plusIcon.png"

const Accordion = ({ data, accordionTitle, margin }) => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  const mountedStyle = {
    animation: "inAnimation 250ms ease-in",
  }
  //   const unmountedStyle = {
  //     animation: "outAnimation 100ms cubic-bezier(1,-0.04, 0.58, 1)",
  //     animationFillMode: "forwards",
  //   }
  return (
    <div className={`accordion-section ${margin}`}>
      <p className="accordion-title">{accordionTitle}</p>
      {data.map((item, index) => {
        return (
          <>
            <div className="accordion-section__item" key={index}>
              <div
                className={`accordion-section__title ${
                  clicked === index ? "is-active" : ""
                }`}
                onClick={() => toggle(index)}
                //  key={index}
              >
                <p>{item.title}</p>
                <img
                  src={openIcon}
                  className={`title-icon ${clicked === index ? " rotate" : ""}`}
                  alt=""
                />
              </div>
              {clicked === index ? (
                <div
                  className="accordion-section__content"
                  style={clicked === index && mountedStyle}
                >
                  {item.content}
                </div>
              ) : null}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Accordion
