import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NDBsection1 from "../components/technology/NDBsection1"
import backImg from "../assets/images/sustainability/headSwirl.svg"
import arrow from "../assets/images/icons/arrow.png"
import middleGridImg1 from "../assets/images/sustainability/middleGrid1.png"
import middleGridImg2 from "../assets/images/sustainability/middleGrid2.png"
import UNlogo from "../assets/images/sustainability/unLogo.png"
import image1 from "../assets/images/sustainability/abstractColor.png"
import image2 from "../assets/images/sustainability/leafHorizontal.png"
import image3 from "../assets/images/sustainability/money.png"
import image4 from "../assets/images/sustainability/heartHands.png"
import vision1 from "../assets/images/sustainability/A.png"
import vision2 from "../assets/images/sustainability/B.png"
import vision3 from "../assets/images/sustainability/C.png"
import vision4 from "../assets/images/sustainability/D.png"
import grid1 from "../assets/images/sustainability/grid1.png"
import grid2 from "../assets/images/sustainability/grid2.png"
import grid3 from "../assets/images/sustainability/grid3.png"
import grid4 from "../assets/images/sustainability/grid4.png"
import NDBWrapper from "../components/wrapper"
import Container from "../components/container"
import CustomGrid from "../components/customGrid"
import OurVision from "../components/ndb-vision/OurVision"

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

  const data5 = {
    backgoundText1: "ethics",
    NDBSectionTitle: "Code of Conduct",
    paragraphUnderQuote1:
      "NDB’s Code of Conduct is one of the ways we apply NDB’s values into practice. Our Code of Conduct recognizes that every activity we perform will be, and should be, measured against the highest possible standards of ethical business conduct.",
    paragraphUnderQuote2:
      "We expect all of our employees and Board members to know and follow our Code of Conduct. Failure to do so can be sanctioned with disciplinary action, including termination of employment. We expect our extended workforce (temps, vendors, and independent contractors) and others who may be temporarily assigned to perform work or services for NDB to follow our Code of Conduct. ",
  }
  const data6 = {
    backgoundText1: "compl-",
    NDBSectionTitle: "Integrity and Standards",
    paragraphUnderQuote1:
      "NDB has implemented a unique compliance activities management method and program led by a Compliance Officer. The Compliance Officer oversights the activities and plans in accordance with the national and international compliance standards. ",
    paragraphUnderQuote2:
      "NDB’s compliance program selects themes following priority control targets, enabling our Legal Team to evaluate risk factors, new regulations and implementations. Our plan is also based on post-management monitoring, measuring and evaluating performances.",
  }
  const data7 = {
    backgoundText1: "iance",
    NDBSectionTitle: "Compliance guidelines:",
    paragraphUnderQuote1:
      "NDB is a multinational company expanding and conducting businesses across the world. Through its “Compliance Report”, employees are able to conduct their work without violating applicable laws and regulations such as internal regulations and local laws.",
  }
  const cards1 = [
    {
      cardTitle: "",
      cardContent: "Conduct yourself honestly and ethically",
      // cardNumber: "1",
      cardImage: vision1,
    },
    {
      cardTitle: "",
      cardContent: "Guidance to your daily activities within the workplace",
      // cardNumber: "2",
      cardImage: vision2,
    },
    {
      cardTitle: "",
      cardContent: "Understand what NDB expects from you.",
      // cardNumber: "3",
      cardImage: vision3,
    },
    {
      cardTitle: "",
      cardContent:
        "Prevention of any unethical, inappropriate, or illegal behaviour from our workforce.",
      // cardNumber: "4",
      cardImage: vision4,
    },
  ]
  const gridItems = [
    {
      title: "",
      itemImg: image1,
      content:
        "We aim to protect the environment through activities that preserve biodiversity",
    },
    {
      title: "",
      itemImg: image2,
      content:
        "Social activities to actively preserve the environment, such as clean-up weeks, plastic removal, and more.",
    },
    {
      title: "",
      itemImg: image3,
      content:
        "NDB leads the formation of a circular economy valuing the recycling of waste, hazardous, non-hazardous, and eco-friendly materials.",
    },
    {
      title: "",
      itemImg: image4,
      content:
        "A mentorship program in a rural or in an underprivileged environment for society leaders who want to improve their economy and society from a green point of view. ",
    },
  ]
  const cards2 = [
    {
      cardTitle: "",
      cardContent:
        "Developing innovations that will have a limited impact on our environment during the life cycle of our products.",
      // cardNumber: "1",
      cardImage: grid1,
    },
    {
      cardTitle: "",
      cardContent:
        "Ensuring our products and operations comply or exceed local, national and international environmental requirements.",
      // cardNumber: "2",
      cardImage: grid2,
    },
    {
      cardTitle: "",
      cardContent:
        "Practicing eco-friendly management and implementing processes that allow the efficient use of our resources.",
      // cardNumber: "3",
      cardImage: grid3,
    },
    {
      cardTitle: "",
      cardContent:
        "Offering a workplace that protects the safety and health of our employees.",
      // cardNumber: "4",
      cardImage: grid4,
    },
  ]

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
        buttonWidth="w-50"
        buttonImg={arrow}
        textAlign="text-center"
        flex="flex-center"
        margin="mt-100"
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
        buttonLink="#"
        // backgoundText3Style="right bottom"
      />
      <OurVision
        cards={cards2}
        visionTitle="Our Commitments"
        backgoundText1="safety"
        backgoundText2="manag-"
        backgoundText1Style="top right"
        backgoundText2Style="bottom left"
        margin="mt-100"
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
        buttonLink="#"
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
        buttonLink="/contact/"
        buttonWidth="w-40"
        buttonTitle="Contact us"
        buttonImg={arrow}
        // textAlign="text-center"
        flex="flex-left"
      />
      <Container>
        <div className="sustain-challenge">
          <p>
            The winner of our challenge will participate freely in our
            innovation camp and receive a grant for the development of the
            project.
          </p>
          <img src={UNlogo} alt="challenge winner" />
        </div>
      </Container>
      <CustomGrid
        gridItems={gridItems}
        gridTitle="Green & Energy: Green ecology & economy"
      />
      <NDBsection1
        backgoundText1={data5.backgoundText1}
        NDBSectionTitle={data5.NDBSectionTitle}
        paragraphUnderQuote1={data5.paragraphUnderQuote1}
        paragraphUnderQuote2={data5.paragraphUnderQuote2}
        backgoundText1Style="top right"
        // backgoundText3Style="right bottom"
        buttonTitle="Download our Code of ethics"
        buttonLink="/"
        buttonWidth="w-40"
        buttonImg={arrow}
        textAlign="text-center"
        flex="flex-center"
      />
      {/* <OurVision
        cards={cards1}
        visionTitle="How can the Code help you? "
        color="text-black"
        page="sustain"
        margin="mt-100"
      /> */}

      <NDBWrapper fullWidth>
        <div className="vision mt-100">
          <p className="vision-title">How can the Code help you?</p>
          <div className="ndb-vision">
            {cards1.map((card, index) => {
              const alternatingColors = ["#ffffff", "#000000"]
              const { cardTitle, cardImage, cardContent } = card
              return (
                <div className={`ndb-vision__card `} key={index}>
                  <img
                    src={cardImage}
                    className="card-image overlay"
                    alt="card"
                  />
                  {cardTitle !== "" && (
                    <p className="card-title">{cardTitle}</p>
                  )}

                  <p
                    className="card-content-custom m-20"
                    style={{ color: alternatingColors[index % 3] }}
                  >
                    {cardContent}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </NDBWrapper>

      <NDBsection1
        backgoundText1={data6.backgoundText1}
        NDBSectionTitle={data6.NDBSectionTitle}
        paragraphUnderQuote1={data6.paragraphUnderQuote1}
        paragraphUnderQuote2={data6.paragraphUnderQuote2}
        backgoundText1Style="top right"
      />
      <NDBsection1
        backgoundText1={data7.backgoundText1}
        NDBSectionTitle={data7.NDBSectionTitle}
        paragraphUnderQuote1={data7.paragraphUnderQuote1}
        backgoundText1Style="top left"
        // backgoundText3Style="right bottom"
        buttonTitle="Download our Compliance Report"
        buttonLink="/"
        buttonWidth="w-40"
        buttonImg={arrow}
        textAlign="text-center"
        flex="flex-center"
      />
    </Layout>
  )
}
export default Sustain
