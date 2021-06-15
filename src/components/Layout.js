import React from "react"
import PropTypes from "prop-types"

import "../assets/stylesheets/main.scss"

// import Banner from "components/Banner"
import Footer from "./footer"

const Layout = ({ children, pageName }) => {
  let className = ""
  if (pageName) {
    className = `${pageName}`
  }
  return (
    <>
      {/* <NDBWrapper> */}
        <main className={className}>{children}</main>
        <Footer />
      {/* </NDBWrapper> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
