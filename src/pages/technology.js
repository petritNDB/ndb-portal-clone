import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import backImg from "../assets/images/technology/bulb.png"
import CollapsibleGrid from "../components/technology/CollapsibleGrid"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBsection2 from "../components/technology/NDBsection2"
import TechGridOverlay from "../components/technology/TechGridOverlay"
import NDBsafetyStrategy from "../components/technology/NDBsafetyStrategy"
import NDBdifference from "../components/technology/NDBdifference"

const Technology = () => {
  return (
    <Layout pageName="technology">
      <Banner pageName="technology" backImg={backImg} />
      <CollapsibleGrid />
      <NDBsection1 />
      <NDBsection2 />
      <TechGridOverlay />
      <NDBsafetyStrategy />
      <NDBdifference />
    </Layout>
  )
}

export default Technology
