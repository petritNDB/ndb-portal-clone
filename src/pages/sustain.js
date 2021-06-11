import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NDBsection1 from "../components/technology/NDBsection1"
import backImg from "../assets/images/sustainability/headSwirl.svg"
import arrow from "../assets/images/icons/arrow.png"
import middleGridImg1 from "../assets/images/sustainability/middleGrid1.png"
import middleGridImg2 from "../assets/images/sustainability/middleGrid2.png"
import NDBWrapper from "../components/wrapper"

const Sustain = () => {
  const data1 = {
    backgoundText1: "environ-",
    backgoundText2: "mental",
    NDBSectionTitle: "Vision",
    paragraphOverQuote1:
      "At NDB, we pursue sustainable innovation based on our sustainability strategy, including our community, environment and social value throughout our business activities.",
    paragraphOverQuote2:
      "Deliver advanced, innovative and green solutions for our environment and society. We aim to lead sustainable innovation across societies. Managing the impacts of climate change, we plan climate action, we recycle, we plan water and resources management.",
    quote:
      "“There’s no Innovation without taking into account: Sustainability, Accessibility and Quality.” ",
    paragraphUnderQuote1:
      "Building a sustainable business based on cutting-edge technologies holds a significant challenge. Nevertheless, we remain determined to provide professional and outstanding services.",
  }

  const data2 = {
    backgoundText1: "health",
    backgoundText2: "and",
    NDBSectionTitle: "Our environmental, health and safety policy",
    paragraphUnderQuote1:
      "At NDB, we are committed to offering a safe and healthy workplace for all our employees, who are highly encouraged to use their judgment capacity to contribute effectively to the company’s success and growth. To achieve this point, we strive to implement EH&S policy without sacrificing the attractiveness of our products in terms of quality, accessibility and sustainability.",
  }
  const data3 = {
    backgoundText1: "social",
    backgoundText2: "partner-",
    NDBSectionTitle: "Corporate social responsibility",
    paragraphOverQuote1:
      "NDB aims to provide environmental value to our customers’ lives and society in general. NDB corporate social activities as a green connection in Education, Energy, Ecology, and Economy.",
    paragraphOverQuote2:
      "Green education: NDB engages in youth education support activities to help in improving talent for the future of tech and environment.",
    quote: "“Educating young minds to start building tomorrow’s world.”",
    paragraphUnderQuote1:
      "At NDB, we want to help each individual to reach their full potential in the hope they will give back to society what they have received (from us).",
  }
  const data4 = {
    backgoundText1: "ship",
    NDBSectionTitle: "NDB innovation challenge - upcoming December 2021",
    paragraphUnderQuote1:
      "NDB’s innovation challenge is a unique opportunity for young people who have great projects or ideas with a positive impact on global challenges, following the Sustainable development goals set by the UN. Because encouraging future generations to find innovative solutions that will build a more sustainable tomorrow is part of our DNA. If you know a young person who will be interested in participating in our Challenge, reach out to us.",
  }
  return (
    <Layout>
      <Seo title="Sustainability" />
      <Banner
        pageName="sustainability"
        backImg={backImg}
        bannerLinkName="Contribute"
        bannerLink="/career"
        bannerDesc="SUSTAINABILITY "
      />

      <NDBsection1
        backgoundText1={data1.backgoundText1}
        backgoundText2={data1.backgoundText2}
        // backgoundText3={data1.backgoundText3}
        NDBSectionTitle={data1.NDBSectionTitle}
        paragraphOverQuote1={data1.paragraphOverQuote1}
        paragraphOverQuote2={data1.paragraphOverQuote2}
        quote={data1.quote}
        paragraphUnderQuote1={data1.paragraphUnderQuote1}
        backgoundText1Style="top right"
        backgoundText2Style="left middle"
        // backgoundText3Style="right bottom"
        buttonTitle="Download our Sustainability Strategy"
        buttonLink="/"
        buttonWidth="w-40"
        buttonImg={arrow}
        textAlign="text-center"
        flex="flex-center"
      />
      <NDBsection1
        backgoundText1={data2.backgoundText1}
        backgoundText2={data2.backgoundText2}
        // backgoundText3={data2.backgoundText3}
        NDBSectionTitle={data2.NDBSectionTitle}
        paragraphOverQuote1={data2.paragraphOverQuote1}
        paragraphOverQuote2={data2.paragraphOverQuote2}
        quote={data2.quote}
        paragraphUnderQuote1={data2.paragraphUnderQuote1}
        backgoundText1Style="top right"
        backgoundText2Style="left bottom-20"
        // backgoundText3Style="right bottom"
      />
      <NDBsection1
        backgoundText1={data3.backgoundText1}
        backgoundText2={data3.backgoundText2}
        // backgoundText3={data3.backgoundText3}
        NDBSectionTitle={data3.NDBSectionTitle}
        paragraphOverQuote1={data3.paragraphOverQuote1}
        paragraphOverQuote2={data3.paragraphOverQuote2}
        quote={data3.quote}
        paragraphUnderQuote1={data3.paragraphUnderQuote1}
        backgoundText1Style="top right"
        backgoundText2Style="left bottom"
        // backgoundText3Style="right bottom"
      />
      <NDBWrapper>
        <div className="middle-grid">
          <div className="middle-grid__item">
            <img src={middleGridImg1} alt="" />
            <p>
              Innovation camp: opportunities for youth to grow their talent
              during intensive camp-workshop together with NDB’s seniors and
              partners.
            </p>
          </div>
          <div className="middle-grid__item">
            <img src={middleGridImg2} alt="" />
            <p>
              Environmental education for Youths: conferences and webinars to
              spread an environmentally friendly way of life, as well youth
              activities and events.
            </p>
          </div>
        </div>
      </NDBWrapper>
      <NDBsection1
        backgoundText1={data4.backgoundText1}
        NDBSectionTitle={data4.NDBSectionTitle}
        paragraphUnderQuote1={data4.paragraphUnderQuote1}
        backgoundText1Style="top right"
        linkContent="PETRIT"
        buttonLink="/contact"
        buttonWidth="w-40"
        buttonTitle="Contact us"
        buttonImg={arrow}
        textAlign="text-center"
        flex="flex-center"
      />
    </Layout>
  )
}
export default Sustain
