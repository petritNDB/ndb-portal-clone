import { Link } from "gatsby"
import React from "react"
import navArrow from "../assets/images/icons/navArrow.png"

const Navbar = () => {
  return (
    <nav className="banner__nav">
      {/* <div > */}
      <Link to="/" className="nav-link">
        Home{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/company" className="nav-link">
        Company{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/sustain" className="nav-link">
        Sustainability{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/technology" className="nav-link">
        Technology{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/investors" className="nav-link">
        Investors{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/news" className="nav-link">
        News{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/careers" className="nav-link">
        Careers{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/contact" className="nav-link">
        Contact{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/shop" className="nav-link">
        Shop{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
