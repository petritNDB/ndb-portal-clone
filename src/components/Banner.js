import React from "react"

import Container from "./container"
import Navbar from "./navbar"
import { Link } from "gatsby"
import NDBWrapper from "./wrapper"
import logo from "../assets/images/logo.png"
import arrow from "../assets/images/icons/arrow.png"

const Banner = ({
  pageName,
  backImg,
  bannerLink,
  bannerDesc,
  bannerLinkName,
}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__banner`
  }

  return (
    // <Container>
    <NDBWrapper>
      <div className={className}>
        {/* <div className="banner"> */}
        <div className="banner__left">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>{" "}
          <img
            src={backImg}
            className="banner__overlay"
            alt="banner background "
          />
          <p className="banner__description">{bannerDesc}</p>
          <Link to={bannerLink} className="banner__button">
            <img src={arrow} alt="" />
            <span>{bannerLinkName}</span>
          </Link>
        </div>
        <Navbar />
        {/* </div> */}
      </div>
    </NDBWrapper>
    // </Container>
  )
}

export default Banner
