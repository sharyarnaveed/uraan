import React from 'react'
import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom';
import "./project.css"
function Project() {
    const categories=[
        { year: "1st Year", id: 1, route:'/projects/1year' },
        { year: "2nd Year", id: 2 , route:'/projects/2year'},
        { year: "3rd Year", id: 3, route:'/projects/3year' },
        { year: "4th Year", id: 4 , route:'/projects/4year'}
    ]
  return (

   <>


      <main className="main_projects">
        <Navbar/>
        <section className="upper_project">
<div className="page_heading">
    <h1>Categories</h1>
</div>

        </section>
     <section className="lower_project">
        {
            categories.map((category)=>
            (
<Link to={category.route} key={category.id} className="category_cards_a">
<div className="category_cards" >
    <h2> {category.year} </h2>
    </div>
    </Link>

            ))
        }
       {/* <a  href="#"> <div className="category_cards" ><h2>1<sup>st</sup>  Year</h2></div></a>
       <a className="category_cards_a" href="#"> <div className="category_cards" ><h2>2<sup>nd</sup>  Year</h2></div></a>
       <a className="category_cards_a" href="#"> <div className="category_cards" ><h2>3<sup>rd</sup>  Year</h2></div></a>
       <a className="category_cards_a" href="#"> <div className="category_cards" ><h2>4<sup>th</sup>  Year</h2></div></a> */}

     </section>  
    </main>
    </>
  )
}

export default Project