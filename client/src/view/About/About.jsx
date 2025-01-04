import React from 'react'
import Navbar from '../../components/Navbar'
import  "./About.css";
function About() {
  return (
    <>
    <div class="containerabout">
    <Navbar/>
        <header class="header">
            <h1>About Us</h1>
            <p>Get to know more about our project exhibition and the team behind it.</p>
        </header>

        <section class="about-section">
            <div class="about-text">
                <h2>Our Mission</h2>
                <p>We aim to provide a platform for showcasing innovative projects developed by talented individuals. Our exhibition is designed to inspire creativity, collaboration, and problem-solving skills.</p>
                <p>Through this initiative, we foster a community of innovators and thinkers, bringing their ideas to life and sharing them with the world.</p>
            </div>
            <div class="about-image">
                <img src="about_us_image.jpg" alt="About Us"/>
            </div>
        </section>

        <section class="team-section">
            <h2>Meet the Team</h2>
            <div class="team-members">
                <div class="team-member">
                    <img src="team_member1.jpg" alt="John Doe"/>
                    <h3>John Doe</h3>
                    <p>Project Manager</p>
                </div>
                <div class="team-member">
                    <img src="team_member2.jpg" alt="Jane Smith"/>
                    <h3>Jane Smith</h3>
                    <p>Lead Developer</p>
                </div>
                <div class="team-member">
                    <img src="team_member3.jpg" alt="Michael Johnson"/>
                    <h3>Michael Johnson</h3>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default About