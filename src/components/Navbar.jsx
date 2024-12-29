import React from 'react'
import "./Navbar.css"
import img from "../assets/Uraan-removebg.png"
function Navbar() {
  return (
    <nav className="nav">
    <div className="logo_con">
        <div className="logo">
            <img src={img} alt=""/>
            </div>
  <h1> Uraan</h1>
    </div>
    <ul className="the_nav_ul">
        <a href="#">    <li className="nav_li">Home</li></a>
        <a href="project.html">    <li className="nav_li">Projects</li></a>
        <a href="#">    <li className="nav_li">About Us</li></a>
    
    </ul>
    <div className="contact_nav">
        <a href="#" className="contact_us_nav">Contact Us</a>
    </div>
</nav>
  )
}

export default Navbar