import React from "react"
import circuit from "../../assets/images/svg/fullCirciut.svg"
import NDBWrapper from "../NDBWrapper"

const NDBdifference = ({fullWidth}) => {
  return (
    <NDBWrapper fullWidth={fullWidth}>
      <div className="technology__ndb-circuit">
        <div className="circuit__gridItem">
          Standard batteries that are available in today's energy market utilize
          energy in a chemical form. A nuclear battery, on the other hand,
          generates electricity similar to a solar cell but using radiation from
          nuclear decay instead of sunlight. It would be possible to also store
          the energy from the radiation.
        </div>
        <div className="circuit__gridItem">
          The NDB generally consists of three main components: isotope,
          transducer and storage unit. The isotope decays and emits radiation
          which is converted into electricity in the transducer. Finally, the
          storage unit stores the excess energy for future usage.
        </div>
        <div className="circuit__gridItem">
          Where a chemical battery needs external power to recharge it, a NDB is
          an independent power source in itself. The chemical battery can only
          contain a certain amount of energy depending on its capacity whereas a
          nuclear battery can provide energy until the end of its used isotopic
          lifetime.
        </div>
        <div className="circuit__gridItem">
          The NDB cell stores the excess charge created from the radiation in a
          built-in charge storage device, so the charge generated while idle is
          properly utilized. The cell in itself can theoretically last longer
          than typical Lithium ion, Silver Oxide batteries of comparable volume
          & power:
        </div>
        <p className="circuit__gridItem">
          We can see that, unlike other battery types, the NDB source does not
          wear out over time.
        </p>
        <img
          src={circuit}
          alt="circuit background"
          className="overlay top left"
        />
      </div>
    </NDBWrapper>
  )
}

export default NDBdifference
