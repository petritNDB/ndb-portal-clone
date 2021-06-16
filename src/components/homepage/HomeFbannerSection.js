import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../wrapper"
import arrow from "../../assets/images/icons/arrow.png"
import CustomButton from "../customButton"

const HomeFbannerSection = ({
  fullWidth,
  pageName,
  backImg,
  bannerLink,
  BelieveTitle,
  link,
}) => {
  // return (
  //   <NDBWrapper fullWidth>
  //     <div className="home__FBanner">
  //       {/* <div className="banner"> */}
  //       <div className="banner__left">
  //         <img
  //           src={backImg}
  //           className="banner__overlay"
  //           alt="banner background "
  //         />
  //         <div className="BelieveTitle">"{BelieveTitle}"</div>
  //         {/* <Link to="" className="banner__button">
  //           <img src={arrow} alt="" />
  //           <span>{bannerLink}</span>
  //         </Link> */}
  //         <CustomButton
  //           buttonImg={arrow}
  //           buttonLink={link}
  //           buttonTitle="Believe in NDB"
  //           pageName={pageName}
  //         />
  //       </div>

  //       {/* </div> */}
  //     </div>
  //   </NDBWrapper>
  // )
  let className = ""

  if (pageName) {
    className = `${pageName}__FBanner`
  }

  return (
    <NDBWrapper fullWidth={fullWidth}>
      <div className={className}>
        {/* <div className="banner"> */}
        <div className="banner__left">
          <img
            src={backImg}
            className="banner__overlay"
            alt="banner background "
          />
          <div className="BelieveTitle">"{BelieveTitle}"</div>
          <Link to="" className="banner__button">
            <img src={arrow} alt="" />
            <span>{bannerLink}</span>
          </Link>
        </div>

        {/* </div> */}
      </div>
    </NDBWrapper>
  )
}

export default HomeFbannerSection
