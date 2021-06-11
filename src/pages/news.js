import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"

const News = () => {
  return (
    <Layout>
      <Seo title="News" />
      <Banner pageName="news" bannerLink="/"/>

      <div>
        <h1>News Page</h1>
      </div>
    </Layout>
  )
}

export default News
