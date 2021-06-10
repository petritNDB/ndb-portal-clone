import { Link } from "gatsby"
import React from "react"

const CustomButton = ({
  buttonTitle,
  buttonLink,
  buttonImg,
  textOrder,
  textAlign,
  buttonWidth,
}) => {
  return (
    // max-width: 40%;
    //  margin: 70px auto;
    <div className="c-button">
      <Link to={buttonLink} className={`c-button__link ${buttonWidth}`}>
        <img src={buttonImg} alt="buttonImg" className="c-button__img" />
        <p className={`c-button__name ${textAlign} ${textOrder}`}>
          {buttonTitle}
        </p>
      </Link>
    </div>
  )
}

export default CustomButton
