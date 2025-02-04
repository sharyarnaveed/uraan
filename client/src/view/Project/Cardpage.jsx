import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Card.css";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cardpage() {
    const {id}=useParams()
    const navigate=useNavigate();
const [cards,setData]=useState([])



const getprojectlist=async(theid)=>
{
    try {
        
console.log(theid);
const responce=await axios.post("/api/user/getprojects",{year:theid});
console.log(responce.data);
setData(responce.data)


    } catch (error) {
        console.log("error in getting projects",error);
        
    }
}


useEffect(()=>
{
getprojectlist(id)

},[])

  return (
      <>
      <div className="topcardsection">
 
 <Link to={'/projects'}>Back</Link>
<form action="">
    <input type="text" name="search" placeholder="Search"/>
</form>
 

      </div>
      <div className="card-container">
        {
            cards.map((card)=>(
                <div key={card.project_id} className="card">
                <div className="card-image">
                    {/* <img src="https://via.placeholder.com/300x200" alt="Project Image"/> */}
                </div>
                <div className="card-content">
                    <h2 className="card-title">{card.project_name}</h2>
                    <button onClick={()=>{navigate(`/projectdetail/${id}/${card.project_id}`)}} className="card-button">View Details</button>
                </div>
            </div>
           

            ))
        }
      
    </div>
    
    </>
  )
}

export default Cardpage