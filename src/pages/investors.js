import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import backImg from "../assets/images/technology/bulb.png"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBsection2 from "../components/technology/NDBsection2"
import TechGridOverlay from "../components/technology/TechGridOverlay"
import NDBsafetyStrategy from "../components/technology/NDBsafetyStrategy"
import NDBdifference from "../components/technology/NDBdifference"
import Seo from "../components/seo"

const Investors = () => {
  return (
    <Layout pageName="investors">
      <Seo title="Investors" />
      <Banner
        pageName="investors"
        backImg={backImg}
        bannerLinkName="Contact us"
        bannerLink="/"
      />
      <NDBsection1 />
      <NDBsection2 />
      <TechGridOverlay />
      <NDBsafetyStrategy />
      <NDBdifference />
    </Layout>
  )
}

export default Investors
