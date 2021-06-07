import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Banner pageName="contact" />

      <div>
        <h1>Contact Page</h1>
      </div>
    </Layout>
  )
}

export default Contact
