import React, { useEffect, useState } from 'react'
import "./AdminPanel.css"
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom'
import img from "../../assets/heroimg.jpg"
import axios from 'axios';
import Callapi from '../../api';
function AdminProject() {
  const navigate=useNavigate()
  const api= Callapi(navigate);
  
  const imgage=img;
  const [pdata,setdata]=useState([]);
  useEffect(()=>
    {
      const getproject=async()=>
      {
try {
  const responce=await api.post("/api/admin/getprjects");
  console.log(responce.data);
  setdata(responce.data.projects);
} catch (error) {
  console.log("cannot get projects",error);
  
}
      }
 

      getproject();
  
    },[])
    return (
   <>

<main class="main-content">
      <header>
        <h1>Projects</h1>
      </header>

      <section class="content project-cards">
       {
        pdata.map((item)=>
        (
          <div className="card" key={item.project_id}>
          <img src={`http://localhost:3000/${item.img1}`} alt="Project 1 Image" className="card-image"/>
          <h3>{item.project_name}</h3>
          <p>{item.project_descrp}</p>
          <div className="card-buttons">
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Not Approved</button>
            <Link to={`/adminpanel/projectdetail/${item.project_id}`} className="details-btn">Details</Link>
          </div>
        </div>
        ))
       }
        
      
        
       
       

     
        
     
      </section>
    </main>


   
   </>
  )
}

export default AdminProject