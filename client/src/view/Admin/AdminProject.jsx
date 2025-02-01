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

 useEffect(()=>
    {
  
      getproject();
  
    },[])


const approvedproject=async(id)=>
{
  try {
    console.log(id);
    
    const responce=await axios.post("/api/admin/approveproject",{id:id})
    console.log(responce.data);
    
await getproject()


  } catch (error) {
    console.log(error);
    
  }
}

    return (
   <>

<main class="main-content">
      <header>
        <h1>Projects</h1>
      </header>

      <section className="content project-cards">
       {
        pdata.map((item)=>
        (
          <div className="card" key={item.project_id}>
          <img src={`http://localhost:3000/${item.img1}`} alt="Project 1 Image" className="card-image"/>
          <h3>{item.project_name}</h3>
          <p>{item.project_descrp}</p>
          <div className="card-buttons">
            <button onClick={()=>{
              approvedproject(item.project_id)
            }} className="approve-btn">Approve</button>
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