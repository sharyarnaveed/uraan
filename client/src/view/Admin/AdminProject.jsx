import React from 'react'
import "./AdminPanel.css"
import { Link } from 'react-router-dom'
import img from "../../assets/heroimg.jpg"
function AdminProject() {
  const imgage=img;
    return (
   
   <>

<main class="main-content">
      <header>
        <h1>Projects</h1>
      </header>

      <section class="content project-cards">
       
        <div className="card">
          <img src={imgage} alt="Project 1 Image" className="card-image"/>
          <h3>Project Title 1</h3>
          <p>Description of the project goes here. It can include key details about the project.</p>
          <div className="card-buttons">
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Not Approved</button>
            <Link to={"/adminpanel/projectdetail/2"} class="details-btn">Details</Link>
          </div>
        </div>

     
        
     
      </section>
    </main>


   
   </>
  )
}

export default AdminProject