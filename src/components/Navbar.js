import { Link } from "gatsby"
import React from "react"
import navArrow from "../assets/images/icons/navArrow.png"

const Navbar = () => {
  // let menuItems = document.querySelectorAll(".nav-link")
  // let menuArrow = document.querySelectorAll(".nav-link__arrow")
  // let current = window.location.pathname.split("/")[1]
  // if (current === "") return
  // for (let i = 0, len = menuItems.length; i < len; i++) {
  //   if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
  //     menuItems[i].className += " active"
  //     menuArrow[i].className += " active"
  //   }
  // }
  const handleClick = e => {
    let menuItems = document.querySelectorAll(".nav-link")
    let menuArrow = document.querySelectorAll(".nav-link__arrow")
    let current = window.location.pathname.split("/")[1]
    console.log(
      "❌❌ -> file: navbar.js -> line 20 -> Navbar -> current",
      current
    )
    if (current === "") return
    for (let i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
        menuItems[i].className += " active"
        menuArrow[i].className += " active"
      }
    }
  }
  return (
    <nav className="banner__nav">
      {/* <div > */}
      <Link to="/" className="nav-link" onLoad={handleClick}>
        Home{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/company/" className="nav-link" onLoad={handleClick}>
        Company{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/sustain/" className="nav-link" onLoad={handleClick}>
        Sustainability{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/technology/" className="nav-link" onLoad={handleClick}>
        Technology{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/investors/" className="nav-link" onLoad={handleClick}>
        Investors{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/news/" className="nav-link" onLoad={handleClick}>
        News{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/careers/" className="nav-link" onLoad={handleClick}>
        Careers{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/contact/" className="nav-link" onLoad={handleClick}>
        Contact{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      <Link to="/shop/" className="nav-link" onLoad={handleClick}>
        Shop{" "}
        <img src={navArrow} className="nav-link__arrow" alt="nav link icon" />{" "}
      </Link>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
