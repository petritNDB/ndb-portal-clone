import { Link } from "gatsby"
import React from "react"
import Container from "../Container"
import NDBWrapper from "../NDBWrapper"
import arrow from "../../assets/images/icons/arrow.png"
import CustomButton from "../CustomButton"

const NDBsection1 = ({
  backgoundText1,
  backgoundText1Style,
  backgoundText2,
  backgoundText2Style,
  NDBSectionTitle,
  quote,
  parag1,
  parag2,
  parag3,
  sectionPapper,
  quoteImg,
  linkContent,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  textAlign,
  flex,
}) => {
  return (
    <NDBWrapper>
      <div className="technology__section1">
        <span className={`overlay1 ${backgoundText1Style}`}>
          {backgoundText1}
        </span>
        <span className={`overlay2 ${backgoundText2Style}`}>
          {backgoundText2}
        </span>
        <Container>
          <span className="technology__section1-title">{NDBSectionTitle}</span>
          {quote ? (
            <div className="section-quote">
              <img src={quoteImg} />
              <img src={quoteImg} />
              <p>{quote}</p>
            </div>
          ) : (
            ""
          )}

          <p className="section-content">{parag1}</p>
          <p className="section-content">{parag2}</p>
          <p className="section-content">{parag3}</p>
          <div className="section-image">
            <img src={sectionPapper} />
          </div>
          {/* <Link to="contact" className="banner__button">
            <img src={arrow} alt="" />
            <span>{linkContent}</span>
          </Link> */}
          <CustomButton
            linkContent={linkContent}
            buttonLink={buttonLink}
            buttonWidth={buttonWidth}
            buttonTitle={buttonTitle}
            buttonImg={buttonImg}
            textAlign={textAlign}
            flex={flex}
          />
        </Container>
      </div>
    </NDBWrapper>
  )
}

export default NDBsection1
