import React, { useState } from "react"
import Form from "../components/form/Form"
import ReactPlayer from "react-player"
import heroVideo from "../assets/videos/office.mp4"
import arrow from "../assets/images/icons/arrowReadMore.png"
import videoBackImg from "../assets/images/homepage/videoSection.png"
import NDBWrapper from "../components/wrapper"

const Test = () => {
  const [isReady2Play, setIsReady2Play] = useState(false)
  const handleClick = () => {
    setIsReady2Play(!isReady2Play)
  }

  return (
    <NDBWrapper fullWidth className="relative">
      <div
        className={`home__DiscovrBanner ${isReady2Play ? "hide" : ""}`}
        // style={{ zIndex: isReady2Play ? "-1" : "" }}
      >
        <div className="banner__left">
          <img
            src={videoBackImg}
            className="banner__overlay"
            alt="banner background "
          />
          <div className="DisTitle">"This is the description"</div>
          <button className="banner__button" onClick={handleClick}>
            <img src={arrow} alt="" />
            <span>Play video</span>
          </button>
        </div>
      </div>
      <div
        className={`banner__closeButton ${!isReady2Play ? "hide" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
      </div>
      <ReactPlayer
        url={heroVideo}
        playing={isReady2Play}
        // loop
        stopOnUnmount
        controls
        // muted
        width="100%"
        height="100%"
      />
    </NDBWrapper>
  )
}

export default Test
