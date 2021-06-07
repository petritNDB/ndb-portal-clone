import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const careers = () => {
  return (
    <Layout>
      <Seo title="Careers" />
      <Banner pageName="careers" />
      <div>
        <h1>Careers Page</h1>
      </div>
    </Layout>
  )
}

export default careers
