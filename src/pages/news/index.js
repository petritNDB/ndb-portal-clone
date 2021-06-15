import React from "react"
import Banner from "../../components/banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import backImg from "../../assets/images/news/headSwirlNews.svg"

const News = () => {
  return (
    <Layout>
      <Seo title="News" />
      <Banner
        pageName="news"
        bannerLink="/news/press-kit/"
        bannerLinkName="Press kit"
        backImg={backImg}
        // bannerDesc="GET TO KNOW US"
      />

      <div>
        <h1>News Page</h1>
      </div>
    </Layout>
  )
}

export default News
