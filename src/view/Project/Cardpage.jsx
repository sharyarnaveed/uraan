import React from 'react'
import { useParams } from 'react-router-dom'
import "./Card.css";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Cardpage() {
    const {id}=useParams()
    const navigate=useNavigate();

const cards=[
    {name:"project1",id:1},
    {name:"project1",id:2},
    {name:"project1",id:3},
    {name:"project1",id:4}

]


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
                <div key={card.id} className="card">
                <div className="card-image">
                    <img src="https://via.placeholder.com/300x200" alt="Project Image"/>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{card.name}</h2>
                    <p className="card-description">This is a brief description of the project. It's an awesome project that you'll love.</p>
                    <button onClick={()=>{navigate(`/projectdetail/${id}/${card.id}`)}} className="card-button">View Details</button>
                </div>
            </div>
           

            ))
        }
      
    </div>
    
    </>
  )
}

export default Cardpage