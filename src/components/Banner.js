import React from "react"

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
  width,
}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__banner`
  }

  return (
    // <Container>
    <NDBWrapper fullWidth={width ? width : ""}>
      <div className={className}>
        {/* <div className="banner"> */}
        <div className="banner__left">
          <Link to="/">
            <img src={logo} alt="site icon" />
          </Link>{" "}
          <img
            src={backImg}
            className="banner__overlay"
            alt="banner background "
          />
          <p className={`banner__description ${pageName==="home"?"home__banner-desc":""}`}>{bannerDesc}</p>
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
