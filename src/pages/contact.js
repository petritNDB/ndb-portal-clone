import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import backImg from "../assets/images/contact/bannerSwirl.png"
import NDBWrapper from "../components/wrapper"
import Accordion from "../components/accordion/Accordion"
import Form from "../components/form/Form"
import { contactData1, contactData2 } from "../components/accordion/Data"

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
        <Accordion
          accordionTitle="Contact us"
          data={contactData1}
          margin="mt-100"
        />
        <Form />
        <Accordion
          data={contactData2}
          accordionTitle="Learn more about us FAQ"
          margin="mt-100"
        />
      </NDBWrapper>
    </Layout>
  )
}

export default Contact
