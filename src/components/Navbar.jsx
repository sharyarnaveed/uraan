import React from 'react'
import "./Navbar.css"
import img from "../assets/Uraan-removebg.png"
import { Link,NavLink } from 'react-router-dom'

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
        <Link to={"/"}>    <li className="nav_li">Home</li></Link>
        <Link to={"/projects"} href="project.html">    <li className="nav_li">Projects</li></Link>
        <Link to={"/aboutus"} href="#">    <li className="nav_li">About Us</li></Link>
    
    </ul>
    <div className="contact_nav">
        <Link to={"/submit"} href="#" className="contact_us_nav">Submit</Link>
    </div>
</nav>
  )
}

export default Navbar