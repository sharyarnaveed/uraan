import React from 'react'
import "./Detailproject.css"
import { Link, useParams } from 'react-router-dom'
function Detailproject() {
  const {id,pid}=useParams();
    return (
    <>

        <div className="container">
        <div className="back-link">
            <Link to={`/projectdisplay/${id}`}>&larr; Back to Project Details</Link>
        </div>

        <header className="header">
            <h1>Project Name {pid} {id}</h1>
            <p>Explore the detailed information about this project.</p>
        </header>

        <div className="details">
            <h2>Program</h2>
            <p>Bachelor of Software Engineering</p>

            <h2>Project Description</h2>
            <p>This project focuses on solving real-world problems using innovative and efficient technology solutions. The application integrates modern tools and practices to deliver exceptional results.</p>

            <h2>Team Members</h2>
            <ul>
                <li>John Doe</li>
                <li>Jane Smith</li>
                <li>Michael Johnson</li>
            </ul>

            <h2>GitHub Repository</h2>
            <p><a href="https://github.com/example/project" target="_blank">https://github.com/example/project</a></p>

            <h2>Project Images</h2>
            <div className="project-images">
                <img src="image1.jpg" alt="Project Image 1"/>
                <img src="image2.jpg" alt="Project Image 2"/>
            </div>
        </div>

        <div className="cta">
            <a href="#">Contact for Collaboration</a>
        </div>
    </div>
    
    </>
  )
}

export default Detailproject