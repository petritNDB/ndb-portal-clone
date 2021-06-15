import React from "react"
import Accordion from "../../components/accordion/Accordion"
import { PressKitData } from "../../components/news/Data"
import backImg from "../../assets/images/news/headSwirlKit.svg"
import Seo from "../../components/seo"
import Banner from "../../components/banner"
import NDBWrapper from "../../components/wrapper"
import Layout from "../../components/layout"
import Form from "../../components/form/Form"

const PressKit = () => {
  return (
    <Layout>
      <Seo title="Press Kit" />
      <Banner
        pageName="press-kit"
        bannerLink="/news/"
        bannerLinkName="News"
        backImg={backImg}
        // bannerDesc="GET TO KNOW US"
      />
      <NDBWrapper>
        <Accordion
          accordionTitle="Press Kit"
          data={PressKitData}
          margin="mt-100"
        />
        <Form type="news-kit" title="Enquiry" />
      </NDBWrapper>
    </Layout>
  )
}

export default PressKit
