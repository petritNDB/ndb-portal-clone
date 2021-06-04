import React from "react"

import Container from "components/Container"
import Navbar from "./Navbar"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"
import arrow from "../assets/images/icons/arrow.png"

const Banner = ({ pageName, backImg,bannerLink }) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__banner`
  }

  return (
    <Container>
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
          <Link to="" className="banner__button">
            <img src={arrow} alt="" />
            <span >{bannerLink}</span>
          </Link>
        </div>
        <Navbar />
        {/* </div> */}
      </div>
    </Container>
  )
}

export default Banner
