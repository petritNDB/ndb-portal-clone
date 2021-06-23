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
    <div className="not-found">
      <Seo title="404: Not found" />
      <Link to="/" className="logo">
        <img className="404-logo" src={logo} alt="" />
      </Link>
      <img src={background} className="background-image middle right" alt="" />
      <p>404</p>
      <div className="link404">
        <p>Page Not Found</p>
        <div className="content">
          <p>Looks like something was wrong! Go back to the</p>
          <Link to="/">
            Home page <img src={arrow} alt="" />
          </Link>
        </div>
        {/* <CustomButton
          buttonImg={arrow}
          buttonTitle="Home page"
          buttonWidth="w-100"
          buttonTextOrder="1"
        /> */}
      </div>
    </div>
  </NDBWrapper>
)

export default NotFoundPage
