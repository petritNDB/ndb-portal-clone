import { Link } from "gatsby"
import React from "react"
import NDBWrapper from "../wrapper"

const HomeBottomSection = ({
  backImg,
  bannerLink,
  arrow,
  bannerLinkName,
  sectionDesc,
  top,
  left,
  heightAuto,
  bottom,
}) => {
  return (
    <NDBWrapper>
      <div className="home__bottomSection">
        <img
          src={backImg}
          alt="ppppppppp"
          className={`overlay ${top && "top"} ${left && "left"}
           ${bottom && "bottom"} ${heightAuto && "heightAuto"}`}
        />
        <div className="content">
          <p>{sectionDesc}</p>
          <Link to={bannerLink} className="banner__button">
            <img src={arrow} alt="" />
            <span>{bannerLinkName}</span>
          </Link>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default HomeBottomSection
