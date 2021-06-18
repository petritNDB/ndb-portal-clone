import React from "react"
import Banner from "../../components/banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import backImg from "../../assets/images/news/headSwirlNews.svg"
import CustomPartnersGrid from "../../components/partners-grid/CustomPartnersGrid"
import { partnerImages } from "../../components/partners-grid/Data"
import NewsGrid from "../../components/news/NewsGrid"
import { news } from "./Data"

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
      <NewsGrid news={news} />
      <CustomPartnersGrid data={partnerImages} margin="mt-0" />
    </Layout>
  )
}

export default News
