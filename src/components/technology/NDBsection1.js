import React from "react"
import Container from "../Container"
import NDBWrapper from "../NDBWrapper"

const NDBsection1 = () => {
  return (
    <NDBWrapper>
      <div className="technology__section1">
        <span className="overlay1 left top">design</span>
        <span className="overlay2 right middle">&#38;</span>
        <Container>
          <span className="technology__section1-title">NDB</span>
          <p className="section-content">
            NDB is one of the earliest adopters and developers of nuclear
            voltaic cells for mid and high power applications. The self charging
            battery produces stable power by converting the energy released from
            nuclear decay into usable energy all throughout its lifetime which
            is generally many years.
          </p>
          <p className="section-content">
            Nuclear batteries have been around for sometime but the batteries
            are limited to low power applications due to their efficiency. NDB
            optimises this technology for high power applications. We propose to
            reuse nuclear fuel by recycling it to extract radioisotopes.
            Isotopes from the recycled nuclear waste or from an accelerator
            release a high level of energy particles that can be transformed
            into usable energy.
          </p>
        </Container>
      </div>
    </NDBWrapper>
  )
}

export default NDBsection1
