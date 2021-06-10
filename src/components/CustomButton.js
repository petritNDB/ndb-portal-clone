import { Link } from "gatsby"
import React from "react"

const CustomButton = ({
  buttonTitle,
  buttonLink,
  buttonImg,
  textOrder,
  textAlign,
  buttonWidth,
  buttonTextOrder,
  flex,
}) => {
  return (
    // max-width: 40%;
    //  margin: 70px auto;
    <div className={`c-button ${flex}`}>
      <Link to={buttonLink} className={`c-button__link ${buttonWidth}`}>
        {buttonImg ? (
          <img
            src={buttonImg}
            alt="buttonImg"
            className={`c-button__img ${buttonTextOrder}`}
          />
        ) : (
          ""
        )}
        <p className={`c-button__name ${textAlign}`}>{buttonTitle}</p>
      </Link>
    </div>
  )
}

export default CustomButton
