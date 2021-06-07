import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const News = () => {
  return (
    <Layout>
      <Seo title="News" />
      <Banner pageName="news" />

      <div>
        <h1>News Page</h1>
      </div>
    </Layout>
  )
}

export default News
