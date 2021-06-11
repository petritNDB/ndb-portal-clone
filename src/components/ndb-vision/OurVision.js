import React from "react"
import NDBWrapper from "../wrapper"

const OurVision = ({ cards, visionTitle }) => {
  return (
    <NDBWrapper fullWidth>
      <p className="vision-title">{visionTitle}</p>
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
            <div className={`ndb-vision__card `} key={index}>
              <img src={cardImage} className="card-image overlay" alt="card" />
              {/* <p className="card-number">{cardNumber}</p> */}
              <p className="card-title">{cardTitle}</p>
              <p className="card-content">{cardContent}</p>
            </div>
          )
        })}
      </div>
    </NDBWrapper>
  )
}

export default OurVision
