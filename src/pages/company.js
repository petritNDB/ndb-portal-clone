import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Company = () => {
  return (
    <Layout>
      <Seo title="Company" />
      <Banner pageName="company" />

      <div>
        <h1>Company Page</h1>
      </div>
    </Layout>
  )
}

export default Company
