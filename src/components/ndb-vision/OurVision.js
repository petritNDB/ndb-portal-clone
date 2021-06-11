import React from "react"
import NDBWrapper from "../NDBWrapper"

const OurVision = ({ cards }) => {
  return (
    <NDBWrapper fullWidth>
      <div className="ndb-vision">
        {cards.map((card, index) => {
          const {
            cardTitle,
            cardNumber,
            cardImage,
            cardContent,
            span,
            bold,
          } = card
          return (
            <div
              className={`ndb-vision__card `}
              key={index}
            >
              <img src={cardImage} className="card-image overlay" alt="card" />
              {/* <p className="card-number">{cardNumber}</p> */}
              <p className="card-title">{cardTitle}</p>
              <p className="car-content">{cardContent}</p>
            </div>
          )
        })}
      </div>
    </NDBWrapper>
  )
}

export default OurVision
