import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import backImg from "../assets/images/contact/bannerSwirl.png"
import NDBWrapper from "../components/wrapper"
import Accordion from "../components/accordion/Accordion"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />

      <Banner
        pageName="contact"
        bannerLink="/company"
        bannerLinkName="About us"
        backImg={backImg}
        bannerDesc="GET TO KNOW US"
      />

      <NDBWrapper>
        <Accordion accordionTitle="Contact us" margin="mt-100" />
      </NDBWrapper>
    </Layout>
  )
}

export default Contact
