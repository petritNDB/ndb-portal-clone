import React from "react"
import partnerL01 from "../../assets/images/partnersLogos/Nasdaq.png"
import partnerL02 from "../../assets/images/partnersLogos/itochu.png"
import partnerL03 from "../../assets/images/partnersLogos/nvidia.png"
import partnerL04 from "../../assets/images/partnersLogos/cern.png"
import partnerL05 from "../../assets/images/partnersLogos/epfl.png"
import partnerL06 from "../../assets/images/partnersLogos/orano.png"
import NDBWrapper from "../wrapper"

const HomePartnerSection = ({ fullWidth }) => {
  return (
    <div className="partnerWrap">
      <NDBWrapper>
        <div className="Partner_cards">
          <div className="Clogo">
            <img src={partnerL01} alt="" />
            <div className="overlay top left"></div>
          </div>
          <div className="Clogo">
            <img src={partnerL02} alt="" />
            <div className="overlay top left"></div>
          </div>
          <div className="Clogo">
            <img src={partnerL03} alt="" />
            <div className="overlay top left"></div>
          </div>
          <div className="Clogo">
            <img src={partnerL04} alt="" />
            <div className="overlay top left"></div>
          </div>
          <div className="Clogo">
            <img src={partnerL05} alt="" />
            <div className="overlay top left"></div>
          </div>
          <div className="Clogo">
            <img src={partnerL06} alt="" />
            <div className="overlay top left"></div>
          </div>
        </div>
      </NDBWrapper>
    </div>
  )
}

export default HomePartnerSection
