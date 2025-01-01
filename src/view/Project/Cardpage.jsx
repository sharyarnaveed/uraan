import React from 'react'
import { useParams } from 'react-router-dom'
import "./Card.css";
import { Link } from 'react-router-dom'
function Cardpage() {
    const {id}=useParams()
  return (
      <>
      <div className="topcardsection">
 
 <Link to={'/projects'}>Back</Link>
<form action="">
    <input type="text" name="search" placeholder="Search"/>
</form>
 

      </div>
      <div className="card-container">
        <div className="card">
            <div className="card-image">
                <img src="https://via.placeholder.com/300x200" alt="Project Image"/>
            </div>
            <div className="card-content">
                <h2 className="card-title">Project Title 1</h2>
                <p className="card-description">This is a brief description of the project. It's an awesome project that you'll love.</p>
                <button className="card-button">View Details</button>
            </div>
        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://via.placeholder.com/300x200" alt="Project Image"/>
            </div>
            <div className="card-content">
                <h2 className="card-title">Project Title 2</h2>
                <p className="card-description">A short description about this amazing project. Check it out for more details!</p>
                <button className="card-button">View Details</button>
            </div>
        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://via.placeholder.com/300x200" alt="Project Image"/>
            </div>
            <div className="card-content">
                <h2 className="card-title">Project Title 3</h2>
                <p className="card-description">An innovative project designed to make life better. Discover its features now.</p>
                <button className="card-button">View Details</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Cardpage