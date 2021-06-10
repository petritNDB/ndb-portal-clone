import React from "react"
import Tab from "./organic-tabs/Tab"
import Tabs from "./organic-tabs/Tabs"

// import tab8 from "../assets/images/technology/tab8.png"
import tab9 from "../assets/images/technology/tab9.png"
import arrow from "../assets/images/icons/arrowThin.png"
import NDBWrapper from "./NDBWrapper"
import { Link } from "gatsby"
import CustomButton from "./CustomButton"

const CollapsibleGrid = ({
  fullWidth,
  tabs,
  pageName,
  buttonsName,
  link,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  textAlign,
  buttonTextOrder,
  flex
}) => {
  return (
    <NDBWrapper fullWidth={fullWidth}>
      <div className="tabs">
        <p className="page-name">{pageName}</p>
        <Tabs buttonsName={buttonsName}>
          {tabs.map((tab, index) => {
            return (
              <Tab key={index} label={tab.title}>
                <img src={tab.tabImage} className="overlay tabs-overlay" />
                <div className="content-intro">
                  <p className="content-title">{tab.title}</p>
                  <p className="content-bio">{tab.desc}</p>
                </div>
                <div className="content-desc">{tab.content}</div>
                {/* <div className="content-button"> */}
                  {/* <Link to="contact" className="banner__button">
                    <img src={arrow} alt="" />
                    <span>{link}</span>
                  </Link> */}
                  <CustomButton
                    buttonLink={buttonLink}
                    buttonWidth={buttonWidth}
                    buttonTitle={buttonTitle}
                    buttonImg={buttonImg}
                    textAlign={textAlign}
                    buttonTextOrder={buttonTextOrder}
                    flex={flex}
                  />
                {/* </div> */}
              </Tab>
            )
          })}
        </Tabs>
      </div>
    </NDBWrapper>
  )
}

export default CollapsibleGrid
