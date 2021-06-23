import React from "react"

const TabButtons = ({ buttons, changeTab, activeTab, buttonsName }) => {
  return (
    <div className="tab-buttons">
      <p className="buttons-title">{buttonsName}</p>
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
