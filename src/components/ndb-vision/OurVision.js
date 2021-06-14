import React from "react"
import NDBWrapper from "../wrapper"

const OurVision = ({
  cards,
  visionTitle,
  color,
  backgoundText1,
  backgoundText2,
  backgoundText1Style,
  backgoundText2Style,
  margin,
  page,
}) => {
  // const alternatingColors = ["#ffffff", "#000000"]
  return (
    <NDBWrapper fullWidth>
      <div className={`vision ${margin && "mt-100"}`}>
        <p className="vision-title">{visionTitle}</p>
        <span
          className={`overlay1 ${backgoundText1Style}`}
          style={{ transform: "translate(10%,30%)" }}
        >
          {backgoundText1}
        </span>
        <span className={`overlay2 ${backgoundText2Style}`}>
          {backgoundText2}
        </span>
        <div className="ndb-vision">
          {cards.map((card, index) => {
            const {
              backgoundText1,
              backgoundText2,
              backgoundText1Style,
              backgoundText2Style,
              cardTitle,
              cardNumber,
              cardImage,
              cardContent,
              span,
              bold,
            } = card
            {
              return (
                <div className={`ndb-vision__card `} key={index}>
                  <img
                    src={cardImage}
                    className="card-image overlay"
                    alt="card"
                  />
                  {/* <p className="card-number">{cardNumber}</p> */}
                  {cardTitle !== "" && (
                    <p className="card-title">{cardTitle}</p>
                  )}

                  <p className={`card-content m-20 ${color}`}>{cardContent}</p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </NDBWrapper>
  )
}

export default OurVision
