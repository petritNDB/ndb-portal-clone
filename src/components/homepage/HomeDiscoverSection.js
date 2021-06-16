import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../wrapper"
import arrow from "../../assets/images/icons/arrowReadMore.png"
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
  return (
    // <NDBWrapper fullWidth>
    //   <div className="home__videoSection">
    //     {/* <div className="banner"> */}
    //     {/* <div className="banner__left"> */}
    //     <div className="video-overlay overlay">
    //       <img src={backImg} className="overlay" alt="banner background " />
    //       <p className="vide-overlay__desc">
    //         Discover how we make lifelong self-charging batteries possible
    //       </p>
    //       <CustomButton
    //         buttonType="button"
    //         buttonImg={arrow}
    //         buttonTitle="Play Video"
    //         textAlign="text-left"
    //         buttonWidth="w-20"
    //         //  buttonTextOrder="order-2"
    //         flex="flex-left"
    //         // buttonTextOrder
    //       />
    //     </div>
    //     <div className="video">
    //       <video src=""></video>
    //     </div>
    //   </div>

    //   {/* </div> */}
    //   {/* </div> */}
    // </NDBWrapper>
    <NDBWrapper fullWidth={fullWidth}>
      <div className={className}>
        {/* <div className="banner"> */}
        <div className="banner__left">
          <img
            src={backImg}
            className="banner__overlay"
            alt="banner background "
          />
          <div className="DisTitle">"{DiscoverTitle}"</div>
          <button className="banner__button">
            <img src={arrow} alt="" />
            <span>{bannerLink}</span>
          </button>
        </div>

        {/* </div> */}
      </div>
    </NDBWrapper>
  )
}

export default HomeDiscoverSection
