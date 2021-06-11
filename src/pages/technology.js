import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import OrganicTabs from "../components/organic-tabs/OrganicTabs"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBsection2 from "../components/technology/NDBsection2"
import TechGridOverlay from "../components/technology/TechGridOverlay"
import NDBsafetyStrategy from "../components/technology/NDBsafetyStrategy"
import NDBdifference from "../components/technology/NDBdifference"
import backImg from "../assets/images/technology/bulb2.png"
import sectionPapper from "../assets/images/technology/sciencePaper.png"
import tab1 from "../assets/images/technology/tab1.png"
import tab2 from "../assets/images/technology/tab2.png"
import tab3 from "../assets/images/technology/tab3.png"
import tab4 from "../assets/images/technology/tab4.png"
import tab5 from "../assets/images/technology/tab5.png"
import tab6 from "../assets/images/technology/tab6.png"
import tab7 from "../assets/images/technology/tab7.png"
import tab9 from "../assets/images/technology/tab9.png"

const Technology = () => {
  const data1 = {
    backgoundText1: "DESIGN",
    backgoundText2: "&",
    NDBSectionTitle: "NDB",
    parag1:
      "NDB is one of the earliest adopters and developers of nuclear voltaic cells for mid and high power applications. The self charging battery produces stable power by converting the energy released from nuclear decay into usable energy all throughout its lifetime which is generally many years.",
    parag2:
      "Nuclear batteries have been around for sometime but the batteries are limited to low power applications due to their efficiency. NDB optimises this technology for high power applications. We propose to reuse nuclear fuel by recycling it to extract radioisotopes. Isotopes from the recycled nuclear waste or from an accelerator release a high level of energy particles that can be transformed into usable energy.",
  }
  const data2 = {
    backgoundText1: "techno-",
    backgoundText2: "logy",
    NDBSectionTitle: "NDB Voltaic Cell",
    parag1:
      "NDB is a combination of an emitter, NDB T1 transducer and a collector which form an ohmic and Schottky contact. Different dopants enhance the structure.",
    parag2:
      "The energetic radiations released from radioactive decay scatter and deposit energy into the transducing elements. The isotope, together with the host, generates electricity on its own.",
    parag3:
      "Several single units are attached together to create a stack arrangement, which is fabricated to create a positive and negative contact surface similar to a common battery system.",
  }
  const tabs = [
    {
      title: "Data Center",
      desc:
        "NDB provides data centers with power independence from local sources to keep the data safe, all the time.",
      content:
        "Across the world, people rely on data centers to save their important documents and valuable memories to serve them in a trustable way. NDB can provide data centers with power independent from local power sources so that in case of interruptions in energy, data centers would continue to power computers.",
      tabImage: tab1,
    },
    {
      title: "Industries",
      desc:
        "NDB provides data centers with power independence from local sources to keep the data safe, all the time.",
      content:
        "Across the world, people rely on data centers to save their important documents and valuable memories to serve them in a trustable way. NDB can provide data centers with power independent from local power sources so that in case of interruptions in energy, data centers would continue to power computers.",
      tabImage: tab2,
    },
    {
      title: "Consumers Electronics",
      desc: "Charge independence for everyday technological devices.",
      content:
        "With NDB your device, smartphone or laptop can contain a miniature power generator, thus negating the need for constant charging, all whilst delivering a cost-effective solution to countering declining sales for manufacturers. Benefits include power outlet independent devices, increased device computation power and even the opportunity for the rise of personal quantum computing.",
      tabImage: tab3,
    },
    {
      title: "Marine",
      desc: "Powering ships all around the blue world.",
      content:
        "NDB can source ships and boats when they are far from the port for a long time. NDB technology is suitable for environments with water and salt. It does not cause problems as lithium-ion batteries do, since the collection of energy is dependent on the isotope.",
      tabImage: tab4,
    },
    {
      title: "Automotive",
      desc:
        "Power up the EV revolution, with the end of the recharging problem.",
      content:
        "A new generation of batteries allows us to reach a new stage in the electric vehicle revolution, pushing the industry into never-before-seen indicators of efficiency and longevity. NDB is positioned to contribute and lead change in this industry by addressing the bottlenecks in E-Vehicles: the battery and mileage duration. ",
      tabImage: tab5,
    },
    {
      title: "Aviation",
      desc: "Electric propulsion system for drones.",
      content:
        "Day by day, drones are becoming part of our ecosystems. Our technology allows a further improvement of this radical shift toward an automated drones and aircrafts environment. We plan to substitute oil and petrol-based planes with a cleaner solution as NDB, closing the green circle related to the movement of people and goods transportation. ",
      tabImage: tab6,
    },
    {
      title: "Medical Technology",
      desc: "Safe, small and life-long power source for implants.",
      content:
        "In situ medical devices and implantables, such as hearing aids and pacemakers respectively, can benefit from long battery life in a smaller package with an added benefit of safety and longevity.",
      tabImage: tab7,
    },
    {
      title: "Quantumaro",
      desc: "2 open positions",
      content:
        " Do you like finance and accounting? Join us in our F&A Team to give more speed to our rapidly growing business. Directly contribute to our international expansion and discover what it is like to work with an all-star team in tech.",
      tabImage: tab5,
    },
    {
      title: "Space",
      desc:
        "Battery system for satellites, rovers and more to power the deep space explorations of humankind.",
      content:
        "The human desire to explore space is fueled by the excitement of exploring the unknown. Recent advances in space technology have led to increasing demand on their battery systems, hindered by concerns regarding longevity and safety. Satellites and space vehicles rely heavily on solar power, which can be disrupted by space hashes. NDB can be utilized to power electric aircrafts, space rovers and stations whilst allowing for longer activity and reduction of weight with the removal of solar wings. ",
      tabImage: tab9,
    },
  ]

  return (
    <Layout pageName="technology">
      <Seo title="Technology" />
      <Banner
        pageName="technology"
        backImg={backImg}
        bannerLinkName="Contact us"
      />
      <OrganicTabs
        tabs={tabs}
        fullWidth
        buttonsName="Applications"
        link="Contact us"
      />
      <NDBsection1
        backgoundText1={data1.backgoundText1}
        backgoundText2={data1.backgoundText2}
        NDBSectionTitle={data1.NDBSectionTitle}
        parag1={data1.parag1}
        parag2={data1.parag2}
        backgoundText1Style="top left"
        backgoundText2Style="right middle-4"
      />
      <NDBsection1
        backgoundText1={data2.backgoundText1}
        backgoundText2={data2.backgoundText2}
        NDBSectionTitle={data2.NDBSectionTitle}
        parag1={data2.parag1}
        parag2={data2.parag2}
        parag3={data2.parag3}
        backgoundText1Style="top right"
        backgoundText2Style="middle-4 left"
        sectionPapper={sectionPapper}
      />
      <TechGridOverlay />
      <NDBsafetyStrategy />
      <NDBdifference fullWidth />
    </Layout>
  )
}

export default Technology
