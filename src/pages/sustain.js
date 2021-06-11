import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Sustain = () => {
  return (
    <Layout>
      <Seo title="Sustainability" />
      <Banner pageName="sustainability" bannerLink="/" />

      <div>
        <h1>Sustainability Page</h1>
      </div>
    </Layout>
  )
}

export default Sustain
