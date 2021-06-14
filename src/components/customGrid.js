import React from "react"
import NDBWrapper from "./wrapper"

const CustomGrid = ({ gridItems, gridTitle }) => {
  return (
    <NDBWrapper fullWidth>
      <p className="custom-grid__title">{gridTitle}</p>
      <div className="custom-grid">
        {gridItems.map((item, index) => (
          <div className="custom-grid__item" key={index}>
            <img src={item.itemImg} alt="" className="overlay" />
            <p className="title">{item.title}</p>
            <p className="content">{item.content}</p>
          </div>
        ))}
      </div>
    </NDBWrapper>
  )
}

export default CustomGrid
