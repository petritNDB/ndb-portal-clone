import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../assets/images/logo.png"
import arrow from "../assets/images/icons/arrow.png"
import background from "../assets/images/icons/Oops.png"

import { Link } from "gatsby"
import CustomButton from "../components/customButton"
import NDBWrapper from "../components/wrapper"

const NotFoundPage = () => (
  <NDBWrapper>
    <Seo title="404: Not found" />
    <div className="not-found">
      <div className="logo">
        <img className="background-image" src={logo} alt="" />
      </div>
      <img src={background} className="overlay " alt="" />
      <p>Page Not Found</p>
      <div className="404-link">
        <p>Looks like something was wrong! Go back to the</p>
        <CustomButton
          buttonImg={arrow}
          buttonTitle="Home page"
          buttonWidth="w-20"
        />
      </div>
    </div>
  </NDBWrapper>
)

export default NotFoundPage
