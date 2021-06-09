import React from "react"
import Container from "../Container"
import sectionPapper from "../../assets/images/technology/sciencePaper.png"
import NDBWrapper from "../NDBWrapper"

const NDBsection2 = () => {
  return (
    <NDBWrapper>
      <div className="technology__section1">
        <span className="overlay1 right top">techno-</span>
        <span className="overlay2 left middle-4">logy</span>
        <Container>
          <span className="technology__section1-title">NDB Voltaic Cell</span>
          <p className="section-content">
            NDB is a combination of an emitter, NDB T1 transducer and a
            collector which form an ohmic and Schottky contact. Different
            dopants enhance the structure.
          </p>
          <p className="section-content">
            The energetic radiations released from radioactive decay scatter and
            deposit energy into the transducing elements. The isotope, together
            with the host, generates electricity on its own.
          </p>
          <p className="section-content">
            Several single units are attached together to create a stack
            arrangement, which is fabricated to create a positive and negative
            contact surface similar to a common battery system.
          </p>
          <div className="section-image">
            <img src={sectionPapper} alt="sectionPapper" />
          </div>
        </Container>
      </div>
    </NDBWrapper>
  )
}

export default NDBsection2
