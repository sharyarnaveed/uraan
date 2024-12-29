import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css"
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
          <button className="project_button">Projects</button>
          <button className="about_button">About Us</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
