import React from "react"
import map from "../../assets/images/svg/map.svg"
import NDBWrapper from "../wrapper"

const FindUs = () => {
  return (
    <NDBWrapper id="company">
      <p className="find-us-title">Find us</p>

      <div className="find-us">
        <div className="find-us__locations">
          <div className="location">
            <p className="country">United State of America</p>
            <p className="address">50 California Street, Suite 1500</p>
            <p className="city">San Francisco</p>
          </div>
          <div className="location">
            <p className="country">Switzerland</p>
            <p className="address">Rue de la Porte-Neuve 33</p>
            <p className="city">1951 Sion</p>
          </div>
          <div className="location">
            <p className="country">United Kingdom</p>
            <p className="address">69 Wilson St</p>
            <p className="city">London EC2A 2BB</p>
          </div>
          <div className="location">
            <p className="country">Italy</p>
            <p className="address">Via Durando 39</p>
            <p className="city">Milan, 20158 MI</p>
          </div>

          <div className="find-us__contact">
            <p>Contact us</p>
            <div className="email">
              <span>Email</span>
              <a href="mailto:info@ndb.technology">info@ndb.technology</a>
            </div>
            <div className="phone">
              <span>Phone</span>
              <a href="tel:+1 650 252 0002">+1 650 252 0002</a>
            </div>
            <div className="fax">
              <span>Fax</span>
              <a href="#">+1 650 252 0003</a>
            </div>
          </div>
        </div>
        <div className="find-us__map">
          <img src={map} alt="" />
        </div>
      </div>
    </NDBWrapper>
  )
}

export default FindUs
