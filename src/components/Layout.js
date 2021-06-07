import React from "react"
import PropTypes from "prop-types"

import "../assets/stylesheets/main.scss"

// import Banner from "components/Banner"
import Footer from "./Footer"

const Layout = ({ children, pageName }) => {
  let className = ""
  if (pageName) {
    className = `${pageName}-page`
  }
  return (
    <>
      {/* <div className="ndb__wrapper"> */}
        <main className={className}>{children}</main>
        <Footer />
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
