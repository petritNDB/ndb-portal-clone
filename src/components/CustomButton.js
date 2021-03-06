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
  margin,
  buttonType,
  pageName,
}) => {
  return (
    // max-width: 40%;
    //  margin: 70px auto;
    <div className={`c-button ${flex} ${margin} `}>
      {buttonType === "button" ? (
        <button type="submit" className={`c-button__link ${buttonWidth}`}>
          {buttonImg ? (
            <img
              src={buttonImg}
              alt="buttonImg"
              className={`c-button__img ${buttonTextOrder}`}
            />
          ) : (
            ""
          )}
          <p
            className={`c-button__name ${textAlign} ${
              pageName === "home" ? "bold-30" : ""
            }`}
          >
            {buttonTitle}
          </p>
        </button>
      ) : (
        <Link
          to={buttonLink ? buttonLink : "#"}
          className={`c-button__link ${buttonWidth}`}
        >
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
      )}
    </div>
  )
}

export default CustomButton
