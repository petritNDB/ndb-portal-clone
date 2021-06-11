import React from "react"
import NDBWrapper from "./wrapper"

const CustomGrid = ({ gridItems }) => {
  return (
    <NDBWrapper fullWidth>
      <div className="custom-grid">
        {gridItems.map((item, index) => (
          <div className="custom-grid__item" key={index}>
            <img src={item.itemImg} alt="" className="overlay"/>
            <p className="title">{item.title}</p>
            <p className="content">{item.content}</p>
          </div>
        ))}
      </div>
    </NDBWrapper>
  )
}

export default CustomGrid
