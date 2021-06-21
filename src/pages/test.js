import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "../../node_modules/swiper/swiper.min.css"
import "../../node_modules/swiper/components/pagination/pagination.min.css"
import "../../node_modules/swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core"
import Container from "../components/container"
import loadMoreImg from "../assets/images/icons/loadMore.png"
import NDBWrapper from "../components/wrapper"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { news } from "./news/Data"

// install Swiper modules
SwiperCore.use([Pagination, Navigation])
// ----------------------------------------------------
// const Test = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     allFile(
//       filter: { relativeDirectory: { eq: "news/newsCarousel" } }
//       sort: { fields: base, order: ASC }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           base
//           childImageSharp {
//             gatsbyImageData(
//               height: 300
//               width: 300
//               placeholder: BLURRED
//               quality: 10
//               blurredOptions: {width: 100}
//             )
//           }
//         }
//       }
//     }
//   }
// `

// export default Test

export default function Test({ data }) {
  const navigationPrevRef = useRef(null)
  // const navigationNextRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <NDBWrapper>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className="mySwiper"
      >
        <div ref={navigationPrevRef} className="swiperNav__left">
          <button className="arrow-move__Left">
            <img src={loadMoreImg} alt="left" />
          </button>
        </div>
        <div ref={navigationNextRef} className="swiperNav__right">
          <button className="arrow-move__Right">
            <img src={loadMoreImg} alt="left" />
          </button>
        </div>

        {news.map((article, index) => {
          const { newsImg, title, author, datePosted, newsUrl } = article
          return (
            <SwiperSlide key={index}>
              <div className="carousel-grid__item mt-0  " key={index}>
                {/* <GatsbyImage image={newsImg} alt="news thumbnail" /> */}
                <div className="carousel-grid__content ">
                  <p className="author ">{author}</p>
                  <a href={newsUrl} className="title">
                    {title}
                    {data.allFile.totalCount}
                  </a>
                </div>
                <p className="carousel-grid__publishedDate">{datePosted}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* {data.allFile.edges.map(({ node }) => (
        <>
          <p>{node.id}</p>
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
          />
        </>
      ))} */}
    </NDBWrapper>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "news/newsCarousel" } }
      sort: { fields: base, order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              #height: 300
              #width: 300
              placeholder: BLURRED
              quality: 70
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
  }
`

// import React, { useState } from "react"
// import Form from "../components/form/Form"
// import ReactPlayer from "react-player"
// import heroVideo from "../assets/videos/office.mp4"
// import arrow from "../assets/images/icons/arrowReadMore.png"
// import videoBackImg from "../assets/images/homepage/videoSection.png"
// import NDBWrapper from "../components/wrapper"

// const Test = () => {
//   const [isReady2Play, setIsReady2Play] = useState(false)
//   const handleClick = () => {
//     setIsReady2Play(!isReady2Play)
//   }

//   return (
//     <NDBWrapper fullWidth className="relative">
//       <div
//         className={`home__DiscovrBanner ${isReady2Play ? "hide" : ""}`}
//         // style={{ zIndex: isReady2Play ? "-1" : "" }}
//       >
//         <div className="banner__left">
//           <img
//             src={videoBackImg}
//             className="banner__overlay"
//             alt="banner background "
//           />
//           <div className="DisTitle">"This is the description"</div>
//           <button className="banner__button" onClick={handleClick}>
//             <img src={arrow} alt="" />
//             <span>Play video</span>
//           </button>
//         </div>
//       </div>
//       <div
//         className={`banner__closeButton ${!isReady2Play ? "hide" : ""}`}
//         onClick={handleClick}
//       >
//         <span></span>
//         <span></span>
//       </div>
//       <ReactPlayer
//         url={heroVideo}
//         playing={isReady2Play}
//         // loop
//         stopOnUnmount
//         controls
//         // muted
//         width="100%"
//         height="100%"
//       />
//     </NDBWrapper>
//   )
// }

// export default Test
