import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import backImg from "../assets/images/investors/headSwirl2.svg"
import abstractImage from "../assets/images/sustainability/abstractColor.png"
import leafImage from "../assets/images/sustainability/leafHorizontal.png"
import moneyImage from "../assets/images/sustainability/money.png"
import wireframeImage from "../assets/images/sustainability/wireframePlans.png"
import heartImage from "../assets/images/sustainability/heartHands.png"
import playStone from "../assets/images/sustainability/playStone.png"
import resource1 from "../assets/images/investors/resource1.png"
import resource2 from "../assets/images/investors/resource2.png"
import resource3 from "../assets/images/investors/resource3.png"
import arrow from "../assets/images/icons/arrow.png"
import Seo from "../components/seo"
import NDBsection1 from "../components/technology/NDBsection1"
import Accordion from "../components/accordion/Accordion"
import { InvestorsData } from "../components/accordion/Data"
import CustomGrid from "../components/customGrid"
import NDBWrapper from "../components/wrapper"
import CustomButton from "../components/customButton"

const Investors = () => {
  const data1 = {
    backgoundText1: "ndb",
    backgoundText2: "stands by",
    NDBSectionTitle: "Our Values",
    paragraphOverQuote1:
      "As a next- generation energy company, our goal is to contribute effectively to a better tomorrow with our success for innovation which allows us to create unmatched energy solutions. ",
  }
  const gridItems = [
    {
      title: "Our Responsibilites",
      itemImg: heartImage,
      content:
        "As an energy company, NDB, Inc. is aware of its responsibilities. This applies to our own policies, relationships with suppliers, and effect on society in general. We are committed to:",
    },
    {
      title: "FLEXIBILITY",
      itemImg: abstractImage,
      content:
        "NDB imagines things that others don’t. We believe in our abilities and products, whilst developing innovations that are unmatched in the market, to find solutions to society’s needs.",
    },
    {
      title: "EXPERTISE",
      itemImg: wireframeImage,
      content:
        "We continuously monitor the markets with our deep domain expertise to reduce the technical risks and, when required, we employ new business models to improve and succeed when new  innovative technologies are needed.",
    },
    {
      title: "PROFITABILITY COST- EFFECTIVENESS",
      itemImg: moneyImage,
      content:
        "NDB imagines things that others don’t. We believe in our abilities and products, whilst developing innovations that are unmatched in the market, to find solutions to society’s needs.",
    },
    {
      title: "ECO-FRIENDLY ALTERNATIVES",
      itemImg: leafImage,
      content:
        "We develop and manufacture highly innovative clean and green energy solutions for the future by recycling thousands of tonnes worth of nuclear wastes globally.",
    },
    {
      title: "SOCIAL ACCOUNTABILITY",
      itemImg: playStone,
      content:
        "NDB is aware that we are stronger together, and we rise by lifting each other. Therefore, NDB always takes society into account in every decision taken.",
    },
  ]
  return (
    <Layout pageName="investors">
      <Seo title="Investors" />
      <Banner
        pageName="investors"
        backImg={`${backImg}`}
        bannerLinkName="Join us"
        bannerLink="/careers/"
      />
      <NDBsection1
        backgoundText1={data1.backgoundText1}
        backgoundText2={data1.backgoundText2}
        NDBSectionTitle={data1.NDBSectionTitle}
        paragraphOverQuote1={data1.paragraphOverQuote1}
        backgoundText1Style="top right"
        backgoundText2Style="bottom-20 left"
        textAlign="text-center"
        margin="mb-100"
      />
      <Accordion accordionTitle="" data={InvestorsData} margin="mt-100" />
      <CustomGrid gridItems={gridItems} gridTitle="" />
      <NDBWrapper>
        <div className="investors-resources">
          <div className="item">
            <img src={resource1} alt="media kit" />
            <p>Media kit</p>
            <CustomButton
              buttonTitle="Get access"
              buttonLink="#"
              buttonWidth="w-45"
              buttonImg={arrow}
              //  buttonTextOrder="order-2"
              flex="flex-left"
            />
          </div>
          <div className="item">
            <img src={resource2} alt="company profile" />
            <p>Company profile</p>
            <CustomButton
              buttonTitle="Get access"
              buttonLink="#"
              buttonWidth="w-45"
              buttonImg={arrow}
              //  buttonTextOrder="order-2"
              flex="flex-left"
            />
          </div>
          <div className="item">
            <img src={resource3} alt="pitch deck" />
            <p>Pitch deck</p>
            <CustomButton
              buttonTitle="Get access"
              buttonLink="#"
              buttonWidth="w-45"
              buttonImg={arrow}
              //  buttonTextOrder="order-2"
              flex="flex-left"
            />
          </div>
        </div>
      </NDBWrapper>
    </Layout>
  )
}

export default Investors
