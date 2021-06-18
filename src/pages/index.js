import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Seo from "../components/seo"
import backImg from "../assets/images/homepage/homeSwirl.svg"
import horizontalCircuit from "../assets/images/homepage/circuitHorizontal.png"
import videoBackImg from "../assets/images/homepage/videoSection.png"
import arrow from "../assets/images/icons/arrow.png"
import backImg2 from "../assets/images/homepage/abstractUnderVideo2.png"
import backImg3 from "../assets/images/homepage/bottomSwirlImage2.png"

import PartnerSection from "../components/homepage/PartnerSection"
import HomeDiscoverSection from "../components/homepage/HomeDiscoverSection"
import HomeAboutSection from "../components/homepage/HomeAboutSection"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBWrapper from "../components/wrapper"
import CustomPartnersGrid from "../components/partners-grid/CustomPartnersGrid"
import { partnerImages } from "../components/partners-grid/Data"
import HomeBottomSection from "../components/homepage/HomeBottomSection"
import TabsWithCarousel from "../components/tabs-with-carousel/TabsWithCarousel"

const Home = () => {
  const data1 = {
    backgoundText1: "techno",
    backgoundText2: "logy",
    NDBSectionTitle: "What is NDB ?",
    paragraphOverQuote1:
      "NDB is a new type of battery that defies the nature of what a battery is meant to be. It is a battery that doesn't run out in a single user's lifetime due to the fact it directly converts into energy the radiocative decay from nuclear waste. NDB is tiny, modular, cost-effective and scalable from chipset to industrial applications.",
  }
  return (
    <Layout pageName="home">
      <Seo title="Home" />
      <Banner
        pageName="home"
        bannerLink="/contact/"
        bannerLinkName="Contact us"
        bannerDesc="SELF-CHARGING BATTERY"
        backImg={backImg}
        width="fullWidth"
      />
      <PartnerSection fullWidth />
      <NDBsection1
        backgoundText1={data1.backgoundText1}
        backgoundText2={data1.backgoundText2}
        NDBSectionTitle={data1.NDBSectionTitle}
        paragraphOverQuote1={data1.paragraphOverQuote1}
        backgoundText1Style="top right"
        backgoundText2Style="bottom-20  left"
        buttonLink="#"
      />
      <NDBWrapper fullWidth>
        <div className="home-circuitHorizontal">
          <img src={horizontalCircuit} alt="horizontalCircuit" />
        </div>
      </NDBWrapper>
      <HomeAboutSection />
      {/* video */}
      <HomeDiscoverSection
        pageName="home"
        backImg={videoBackImg}
        bannerLink="Play Video"
        DiscoverTitle="Discover how we make lifelong self-charging batteries possible"
        fullWidth
      />
      <HomeBottomSection
        bannerLink="/careers/"
        arrow={arrow}
        bannerLinkName="Believe In NDB"
        sectionDesc="Read more about our values and responsibilites"
        backImg={backImg2}
        heightAuto
        bottom
      />
      <TabsWithCarousel />
      <CustomPartnersGrid data={partnerImages} />
      <HomeBottomSection
        bannerLink="/careers/"
        arrow={arrow}
        bannerLinkName="Join us"
        sectionDesc="Invest In Your Abilities Join Us At NDB"
        backImg={backImg3}
        top
        left
      />
    </Layout>
  )
}
export default Home
