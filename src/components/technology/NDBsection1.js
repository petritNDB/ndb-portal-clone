import { Link } from "gatsby"
import React from "react"
import Container from "../container"
import NDBWrapper from "../wrapper"
import quoteImg from "../../assets/images/icons/quoteCornerGreen.png"
import CustomButton from "../customButton"

const NDBsection1 = ({
  backgoundText1,
  backgoundText2,
  backgoundText3,
  backgoundText1Style,
  backgoundText2Style,
  backgoundText3Style,
  NDBSectionTitle,
  quote,
  quoteAuthor,
  paragraphUnderQuote1,
  paragraphUnderQuote2,
  paragraphUnderQuote3,
  paragraphOverQuote1,
  paragraphOverQuote2,
  sectionPapper,
  // quoteImg,
  linkContent,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  textAlign,
  flex,
  margin,
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
        <span className={`overlay2 ${backgoundText3Style}`}>
          {backgoundText3}
        </span>
        <Container>
          <span className="technology__section1-title">{NDBSectionTitle}</span>
          {paragraphOverQuote1 && (
            <p className="section-content">{paragraphOverQuote1}</p>
          )}
          {paragraphOverQuote2 && (
            <p className="section-content">{paragraphOverQuote2}</p>
          )}
          {quote && (
            <div className="section-quote">
              <img src={quoteImg} />
              <img src={quoteImg} />
              <p>{quote}</p>
              <span className="quote-author">{quoteAuthor}</span>
            </div>
          )}
          {paragraphUnderQuote1 && (
            <p className="section-content">{paragraphUnderQuote1}</p>
          )}
          {paragraphUnderQuote2 && (
            <p className="section-content">{paragraphUnderQuote2}</p>
          )}
          {paragraphUnderQuote3 && (
            <p className="section-content">{paragraphUnderQuote3}</p>
          )}
          {sectionPapper && (
            <div className="section-image">
              <img src={sectionPapper} />
            </div>
          )}

          <CustomButton
            linkContent={linkContent}
            buttonLink={buttonLink}
            buttonWidth={buttonWidth}
            buttonTitle={buttonTitle}
            buttonImg={buttonImg}
            textAlign={textAlign}
            flex={flex}
            margin={margin}
          />
        </Container>
      </div>
    </NDBWrapper>
  )
}

export default NDBsection1
