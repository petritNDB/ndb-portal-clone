import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/footer-logo.png"
import arrow from "../assets/images/icons/arrowThin.png"
import facebook from "../assets/images/icons/facebook.png"
import instagram from "../assets/images/icons/instagram.png"
import linkedIn from "../assets/images/icons/linkedin.png"
import twitter from "../assets/images/icons/twitter.png"

const Footer = () => {
  return (
    // <NDBWrapper>
    <footer>
      <div className="left-side">
        <Link to="/">
          <img src={logo} alt="footer logo" />{" "}
        </Link>
        <div className="address">
          <span>50 California Street, Suite 1500</span>
          <span>San Francisco</span>
          <span>California 94111, USA</span>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()}, NDB Technology ALL RIGHTS RESERVED.
        </div>
      </div>
      <div className="center-side">
        <div className="contact">
          <div className="email">
            <span>Email</span>
            <a href="mailto:info@ndb.technology">info@ndb.technology</a>
          </div>
          <div className="phone">
            <span>Phone</span>
            <a href="tel:+1 650 252 0002">+1 650 252 0002</a>
          </div>
        </div>
        <Link to="/contact/" className="banner__button">
          <img src={arrow} alt="" />
          <span>Contact us</span>
        </Link>
        <div className="social">
          <a
            href="https://www.linkedin.com/company/ndb-inc/mycompany/"
            target="_blank"
          >
            <img src={linkedIn} alt="social-linkedin" />
          </a>
          <a
            href="https://twitter.com/ndbtechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="social-twitter" />
          </a>
          <a
            href="https://www.instagram.com/ndbtechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="social-instagram" />
          </a>
          <a
            href="https://www.facebook.com/ndb.technology/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="social-facebook" />
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="footer-menu">
          <Link to="/">Home</Link>
          <Link to="/technology/">Technology</Link>
          <Link to="/company/">Company</Link>
          <Link to="/sustain/">Sustainability</Link>
          <Link to="/investors/">Investor</Link>
          <Link to="/careers/">Careers</Link>
        </div>
      </div>
    </footer>
    // </NDBWrapper>
  )
}

export default Footer
