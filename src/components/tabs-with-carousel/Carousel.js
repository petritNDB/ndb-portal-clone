import React, { useEffect, useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "../../../node_modules/swiper/swiper.min.css"
import "../../../node_modules/swiper/components/pagination/pagination.min.css"
import "../../../node_modules/swiper/components/navigation/navigation.min.css"
import { news } from "../../pages/news/Data"

// import "./styles.scss"

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core"
// import Container from "../components/container"

import loadMoreImg from "../../assets/images/icons/loadMore.png"
import NDBWrapper from "../wrapper"

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

/* ---------------------------- Carousel Section ---------------------------- */
const Carousel = ({ navigationPrevRef, navigationNextRef }) => {
  // const navigationPrevRef = useRef(null)
  // const navigationNextRef = useRef(null)

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={2}
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
        {/* <div ref={navigationPrevRef} className="swiperNav__left"> */}
        {/* <button className="arrow-move__Left">
            <img src={loadMoreImg} alt="left" />
          </button> */}
        {/* </div> */}
        {/* <div ref={navigationNextRef} className="swiperNav__right"> */}
        {/* <button className="arrow-move__Right">
            <img src={loadMoreImg} alt="left" />
          </button> */}
        {/* </div> */}

        {news.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-grid__item mt-0  " key={index}>
              <img src={article.newsImg} className="" alt="news img" />
              <div className="carousel-grid__content ">
                <p className="author ">{article.author}</p>
                <a href={article.newsUrl} className="title">
                  {article.title}
                </a>
              </div>
              <p className="carousel-grid__publishedDate">
                {article.datePosted}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default Carousel
