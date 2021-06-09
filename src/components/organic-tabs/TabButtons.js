import React from "react"

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      <p className="buttons-title">Applications</p>
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        )
      })}
    </div>
  )
}

export default TabButtons
