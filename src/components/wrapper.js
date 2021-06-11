import React from "react"

const NDBWrapper = ({ fullWidth, children }) => {
  return (
    <div className={`ndb-wrapper ${fullWidth ? "fullWidth" : ""}`}>
      {children}
    </div>
  )
}

export default NDBWrapper
