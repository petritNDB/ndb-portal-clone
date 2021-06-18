import React from "react"
import NDBWrapper from "../wrapper"

const CustomPartnersGrid = ({ data, margin }) => {
  return (
    <div className={`partnerWrap ${margin ? "mt-0" : ""}`}>
      <NDBWrapper>
        <div className="partners-section">
          {data.map((partner, index) => (
            <div className="partners-section__item" key={index}>
              <img
                src={partner.logo}
                alt="partner logo"
                className="partners-section__img"
              />
            </div>
          ))}
        </div>
      </NDBWrapper>
    </div>
  )
}

export default CustomPartnersGrid
