import React, { useState, useRef, useEffect } from "react"
import NDBWrapper from "../wrapper"
import loadMoreImg from "../../assets/images/icons/loadMore.png"
// import Test from "../../pages/test"
import Carousel from "./Carousel"

const TabsWithCarousel = () => {
  const [toggleState, setToggleState] = useState(1)
  let navigationPrevRef = useRef(null)
  let navigationNextRef = useRef(null)

  const toggleTab = index => {
    console.log(
      "❌❌ -> file: TabsWithCarousel.js -> line 10 -> TabsWithCarousel -> index",
      index
    )
    setToggleState(index)
  }

  return (
    <NDBWrapper>
      <div className="block-tabs">
        <button ref={navigationPrevRef} className="arrow-move__Left">
          <img src={loadMoreImg} alt="left" />
        </button>
        <div className="tab-names">
          <button
            className={
              toggleState === 1
                ? "tabs-with-carousel active-tabs"
                : "tabs-with-carousel"
            }
            onClick={() => toggleTab(1)}
          >
            NEWS
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs-with-carousel active-tabs"
                : "tabs-with-carousel"
            }
            onClick={() => toggleTab(2)}
          >
            EVENTS
          </button>
        </div>
        <button ref={navigationNextRef} className="arrow-move__Right">
          <img src={loadMoreImg} alt="right" />
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1
              ? "tabs-with-carousel__content  active-content"
              : "tabs-with-carousel__content"
          }
        >
          <Carousel
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </div>

        <div
          className={
            toggleState === 2
              ? "tabs-with-carousel__content  active-content"
              : "tabs-with-carousel__content"
          }
        >
          <h1>tab2</h1>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default TabsWithCarousel
