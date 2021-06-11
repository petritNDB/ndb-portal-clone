import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NDBsection1 from "../components/technology/NDBsection1"
import FindUs from "../components/company/FindUs"
import OurVision from "../components/ndb-vision/OurVision"
import backImg from "../assets/images/company/headSwirl2.png"
import vision1 from "../assets/images/company/vision1.svg"
import vision2 from "../assets/images/company/vision2.svg"
import vision3 from "../assets/images/company/vision3.svg"
import vision4 from "../assets/images/company/vision4.svg"
import vision5 from "../assets/images/company/vision5.png"
import profile1 from "../assets/images/company/profile1.png"
import profile2 from "../assets/images/company/profile2.png"
import profile3 from "../assets/images/company/profile3.png"
import profile4 from "../assets/images/company/profile4.png"
import bulb from "../assets/images/company/vision5.svg"
import TeamMembers from "../components/ndb-vision/TeamMembers"
import NDBWrapper from "../components/wrapper"

const Company = () => {
  const data1 = {
    backgoundText1: "company",
    NDBSectionTitle: "Our Company",
    quote:
      "“NDB imagines things that others don’t. We believe in our abilities and products, whilst developing solutions that are unmatched in the market.”",
    quoteAuthor: "Nima Golsharifi, CEO ",
    paragOverQuote:
      "NDB, Inc. is a Silicon Valley-based nanotechnology company established for the development and manufacturing of semiconductor chipset, battery solutions, and energy propulsion systems",
  }
  const data2 = {
    backgoundText1: "team",
    NDBSectionTitle: "Our team",
    quote: "Research, invent, develop and analyze in every step of the way.",
    paragOverQuote:
      "NDB values teamwork, mutual respect and transparency. NDB’s strength lies in diversity, it is a source of power and helps the company to have different perspectives. This commitment to diversity makes the work environment more engaging, respectful and welcoming. NDB has a strong multidisciplinary team that gathers expertise from all different disciplines.",
  }
  const cards = [
    {
      cardTitle: "To power s sustainable future",
      cardContent:
        "NDB's main goal is to give an enegy solution that will be sustaiable and damage-free for the environment",
      // cardNumber: "1",
      cardImage: vision1,
    },
    {
      cardTitle: "To create a reliable alternative energy source.",
      cardContent:
        "NDB is always looking for alternatives to create life-long and green energy.",
      // cardNumber: "2",
      cardImage: vision2,
    },
    {
      cardTitle: "To power a sustainable future.",
      cardContent:
        "The battery industry is always looking for efficient and cost-effective alternatives. NDB has accepted this challenge and is working towards improving this field.",
      // cardNumber: "3",
      cardImage: vision3,
    },
    {
      cardTitle: "To create a reliable alternative energy source.",
      cardContent:
        "NDB cares about the environment and wants to help the world in understanding the importance of disposing of waste, as it is a threat to future generations’ wellbeing.",
      // cardNumber: "4",
      cardImage: vision4,
    },
  ]
  const board = [
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile1,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile2,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile3,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile4,
    },
  ]
  const engineers = [
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile1,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile2,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile3,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile4,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile1,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile2,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile3,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile4,
    },
  ]
  const designers = [
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile1,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile2,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile3,
    },
    {
      name: "Name",
      surname: "Surname",
      position: "Position",
      profileImg: profile4,
    },
  ]
  return (
    <Layout>
      <Seo title="Company" />
      <Banner
        pageName="company"
        backImg={backImg}
        bannerLinkName="Join us"
        bannerLink="/career"
        bannerDesc="“Unlock new value with NDB technology”"
      />
      <NDBsection1
        backgoundText1={data1.backgoundText1}
        NDBSectionTitle={data1.NDBSectionTitle}
        quote={data1.quote}
        quoteAuthor={data1.quoteAuthor}
        paragOverQuote={data1.paragOverQuote}
        backgoundText1Style="top left"
      />
      <FindUs />
      <OurVision cards={cards} visionTitle="Our Vision" />
      <NDBWrapper fullWidth>
        <div className="bulb-section">
          <img src={bulb} alt="" className="overlay top left" />
          <p>
            We research, invent, develop technologies to provide greater access
            to a cleaner and greener world.
          </p>
        </div>
      </NDBWrapper>
      <NDBsection1
        backgoundText1={data2.backgoundText1}
        NDBSectionTitle={data2.NDBSectionTitle}
        quote={data2.quote}
        paragOverQuote={data2.paragOverQuote}
        backgoundText1Style="bottom right"
      />
      <TeamMembers board={board} engineers={engineers} designers={designers} />
    </Layout>
  )
}

export default Company
