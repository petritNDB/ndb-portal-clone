import React from "react"
// import NDBWrapper from "../wrapper"
import NDBWrapper from "../wrapper"

import lockImg from "../../assets/images/icons/lock-alt.png"
import batteryImg from "../../assets/images/icons/batteryBolt.png"
import trendingImg from "../../assets/images/icons/trending_up.png"

const HomeWhatNDBSection = ({ fullWidth }) => {
  return (
    <NDBWrapper>
      <div fullWidth={fullWidth}>
        <div className="callToAction">
          <div className="box">
            <p className="callToAction__title">NDB T1 Transducer</p>
            <img src={trendingImg}></img>
            <p className="callToAction__content">
              Transducer that
              <b>can exceed the efficiency and operate at a wider power</b>{" "}
              output range than any similar batteries
            </p>
          </div>
          <div className="box">
            <p className="callToAction__title">Lock-In System</p>
            <img src={lockImg}></img>
            <p className="callToAction__content">
              Ion implantation mechanism called{" "}
              <b>"lock-in system" which preserves the safety</b>
            </p>
          </div>
          <div className="box">
            <p className="callToAction__title">rcRE system</p>
            <img src={batteryImg}></img>
            <p className="callToAction__content">
              The strategic placement of the source and the NDB cells{" "}
              <b>optimizes</b> inelastic scattering
            </p>
          </div>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default HomeWhatNDBSection
