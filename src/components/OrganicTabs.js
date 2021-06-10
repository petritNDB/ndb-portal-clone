import React from "react"
import Tab from "./organic-tabs/Tab"
import Tabs from "./organic-tabs/Tabs"

// import tab8 from "../assets/images/technology/tab8.png"
import tab9 from "../assets/images/technology/tab9.png"
import arrow from "../assets/images/icons/arrowThin.png"
import NDBWrapper from "./NDBWrapper"
import { Link } from "gatsby"

const CollapsibleGrid = ({ fullWidth, tabs, pageName, buttonsName, link }) => {
  return (
    <NDBWrapper fullWidth={fullWidth}>
      <div className="tabs">
        <p className="page-name">{pageName}</p>
        <Tabs buttonsName={buttonsName}>
          {tabs.map((tab, index) => {
            return (
              <Tab key={index} label={tab.title}>
                <img src={tab.tabImage} />
                <div className="content-intro">
                  <p className="content-title">{tab.title}</p>
                  <p className="content-bio">{tab.desc}</p>
                </div>
                <div className="content-desc">{tab.content}</div>
                <div className="content-button">
                  <Link to="contact" className="banner__button">
                    <img src={arrow} alt="" />
                    <span>{link}</span>
                  </Link>
                </div>
              </Tab>
            )
          })}
        </Tabs>
      </div>
    </NDBWrapper>
  )
}

export default CollapsibleGrid
{
  /*  <Tabs>
         <Tab label="Data Center">
            <img src={tab1} />
            <div className="content-intro">
              <p className="content-title">Data Center</p>
              <p className="content-bio">
                NDB provides data centers with power independence from local
                sources to keep the data safe, all the time.{" "}
              </p>
            </div>
            <div className="content-desc">
              Across the world, people rely on data centers to save their
              important documents and valuable memories to serve them in a
              trustable way. NDB can provide data centers with power independent
              from local power sources so that in case of interruptions in
              energy, data centers would continue to power computers.
            </div>
          </Tab>
          <Tab label="Industries">
            <img src={tab2} />
            <div className="content-intro">
              <p className="content-title">Industries</p>
              <p className="content-bio">
                NDB provides data centers with power independence from local
                sources to keep the data safe, all the time.{" "}
              </p>
            </div>
            <div className="content-desc">
              Across the world, people rely on data centers to save their
              important documents and valuable memories to serve them in a
              trustable way. NDB can provide data centers with power independent
              from local power sources so that in case of interruptions in
              energy, data centers would continue to power computers.
            </div>
          </Tab>
          <Tab label="Costumers Electronics">
            <img src={tab3} />
            <div className="content-intro">
              <p className="content-title">Consumers Electronics</p>
              <p className="content-bio">
                Charge independence for everyday technological devices.{" "}
              </p>
            </div>
            <div className="content-desc">
              With NDB your device, smartphone or laptop can contain a miniature
              power generator, thus negating the need for constant charging, all
              whilst delivering a cost-effective solution to countering
              declining sales for manufacturers. Benefits include power outlet
              independent devices, increased device computation power and even
              the opportunity for the rise of personal quantum computing.
            </div>
          </Tab>
          <Tab label="Marine">
            <img src={tab4} />
            <div className="content-intro">
              <p className="content-title">Marine</p>
              <p className="content-bio">
                Powering ships all around the blue world.{" "}
              </p>
            </div>
            <div className="content-desc">
              NDB can source ships and boats when they are far from the port for
              a long time. NDB technology is suitable for environments with
              water and salt. It does not cause problems as lithium-ion
              batteries do, since the collection of energy is dependent on the
              isotope.
            </div>
          </Tab>
          <Tab label="Automotive">
            <img src={tab5} />
            <div className="content-intro">
              <p className="content-title">Automotive</p>
              <p className="content-bio">
                Power up the EV revolution, with the end of the recharging
                problem.
              </p>
            </div>
            <div className="content-desc">
              A new generation of batteries allows us to reach a new stage in
              the electric vehicle revolution, pushing the industry into
              never-before-seen indicators of efficiency and longevity. NDB is
              positioned to contribute and lead change in this industry by
              addressing the bottlenecks in E-Vehicles: the battery and mileage
              duration.
            </div>
          </Tab>
          <Tab label="Aviation">
            <img src={tab6} />
            <div className="content-intro">
              <p className="content-title">Aviation</p>
              <p className="content-bio">
                Electric propulsion system for drones.
              </p>
            </div>
            <div className="content-desc">
              Day by day, drones are becoming part of our ecosystems. Our
              technology allows a further improvement of this radical shift
              toward an automated drones and aircrafts environment. We plan to
              substitute oil and petrol-based planes with a cleaner solution as
              NDB, closing the green circle related to the movement of people
              and goods transportation.
            </div>
          </Tab>
          <Tab label="Medical Technology">
            <img src={tab7} />
            <div className="content-intro">
              <p className="content-title">Medical Technology</p>
              <p className="content-bio">
                Safe, small and life-long power source for implants.
              </p>
            </div>
            <div className="content-desc">
              In situ medical devices and implantables, such as hearing aids and
              pacemakers respectively, can benefit from long battery life in a
              smaller package with an added benefit of safety and longevity.
            </div>
          </Tab>
          <Tab label="Quantumaro">
            <img src={tab2} />
            <div className="content-intro">
              <p className="content-title">Quantumaro</p>
              <p className="content-bio">
                Safe, small and life-long power source for implants.
              </p>
            </div>
            <div className="content-desc">
              In situ medical devices and implantables, such as hearing aids and
              pacemakers respectively, can benefit from long battery life in a
              smaller package with an added benefit of safety and longevity.
            </div>
          </Tab>
          <Tab label="Space">
            <img src={tab9} />
            <div className="content-intro">
              <p className="content-title">Space</p>
              <p className="content-bio">
                Battery system for satellites, rovers and more to power the deep
                space explorations of humankind.
              </p>
            </div>
            <div className="content-desc">
              The human desire to explore space is fueled by the excitement of
              exploring the unknown. Recent advances in space technology have
              led to increasing demand on their battery systems, hindered by
              concerns regarding longevity and safety. Satellites and space
              vehicles rely heavily on solar power, which can be disrupted by
              space hashes. NDB can be utilized to power electric aircrafts,
              space rovers and stations whilst allowing for longer activity and
              reduction of weight with the removal of solar wings.
            </div>
          </Tab> 
        </Tabs>*/
}
