import React from "react"

const NDBWrapper = ({ fullWidth, children, style }) => {
  return (
    <div
      className={`ndb-wrapper ${fullWidth ? "fullWidth" : ""}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default NDBWrapper
