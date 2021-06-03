import React from "react"

import Container from "components/Container"
import Navbar from "./Navbar"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <header>
      {/* <Container> */}
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar />
      {/* </Container> */}
    </header>
  )
}

export default Header
