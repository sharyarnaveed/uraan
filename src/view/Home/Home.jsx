import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css"
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="main">
      <Navbar />

      <section className="intro_text_contain">
        <div className="introtext">
          <h1>
            Dive into an Enthralling <br /> Exhibition Experience!
          </h1>
        </div>
        <div className="main_buttons">
          <Link to={'/projects'} className="project_button">Projects</Link>
          <Link to={'/aboutus'} className="about_button">About Us</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
