import { Link } from "gatsby"
import React from "react"
import navArrow from "../assets/images/icons/navArrow.png"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/" className="link">
          Home{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/company" className="link">
          Company{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/sustain" className="link">
          Sustainability{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/technology" className="link">
          Technology{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/investors" className="link">
          Investors{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/news" className="link">
          News{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/careers" className="link">
          Careers{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/contact" className="link">
          Contact{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
        <Link to="/shop" className="link">
          Shop{" "}
          <img
            src={navArrow}
            className="nav-link__arrow"
            alt="nav link icon"
          />{" "}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
