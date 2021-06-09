import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import backImg from "../assets/images/technology/bulb.png"
import OrganicTabs from "../components/OrganicTabs"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBsection2 from "../components/technology/NDBsection2"
import TechGridOverlay from "../components/technology/TechGridOverlay"
import NDBsafetyStrategy from "../components/technology/NDBsafetyStrategy"
import NDBdifference from "../components/technology/NDBdifference"

const Technology = () => {
  return (
    <Layout pageName="technology">
      <Seo title="Technology" />
      <Banner pageName="technology" backImg={backImg} bannerLink="Contact us" />
      <OrganicTabs fullWidth />
      <NDBsection1 />
      <NDBsection2 />
      <TechGridOverlay />
      <NDBsafetyStrategy />
      <NDBdifference fullWidth />
    </Layout>
  )
}

export default Technology
