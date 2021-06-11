import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />

      <Banner pageName="contact" bannerLink="/" />

      <div>
        <h1>Contact Page</h1>
      </div>
    </Layout>
  )
}

export default Contact
