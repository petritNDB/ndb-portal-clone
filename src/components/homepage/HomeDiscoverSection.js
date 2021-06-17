import React, { useState } from "react"
import { Link } from "gatsby"
import NDBWrapper from "../wrapper"
import arrow from "../../assets/images/icons/arrowReadMore.png"
import ReactPlayer from "react-player"
import heroVideo from "../../assets/videos/office.mp4"
import videoBackImg from "../../assets/images/homepage/videoSection.png"
import CustomButton from "../customButton"

const HomeDiscoverSection = ({
  fullWidth,
  pageName,
  backImg,
  bannerLink,
  DiscoverTitle,
}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__DiscovrBanner`
  }
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
          <div className="DisTitle">
            Discover how we make lifelong self-charging batteries possible
          </div>
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

export default HomeDiscoverSection
