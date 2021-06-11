import { Link } from "gatsby"
import React from "react"
import Container from "../container"
import NDBWrapper from "../wrapper"
import quoteImg from "../../assets/images/icons/quoteCornerGreen.png"
import CustomButton from "../customButton"

const NDBsection1 = ({
  backgoundText1,
  backgoundText1Style,
  backgoundText2,
  backgoundText2Style,
  NDBSectionTitle,
  quote,
  quoteAuthor,
  parag1,
  parag2,
  parag3,
  paragOverQuote,
  sectionPapper,
  // quoteImg,
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
          <p className="section-content">{paragOverQuote}</p>
          {quote ? (
            <div className="section-quote">
              <img src={quoteImg} />
              <img src={quoteImg} />
              <p>{quote}</p>
              <span className="quote-author">{quoteAuthor}</span>
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
