import React from 'react'
import "./submit.css"
import Navbar from "../../components/Navbar";

function Submit() {
    const selectprograms=[
        {id:1,name:"SE"},
        {id:2,name:"CS"},
        {id:3,name:"EE"},
        {id:4,name:"DS"},
        {id:5,name:"CE"},
        {id:6,name:"CYS"},
        {id:7,name:"AI"}
    ]
  return (
<>
<main className='submitform'>
    <Navbar/>
    <div className="form_conn">

    
    <form className='uploadproject' action="">
<input type="text" placeholder=' Project Name' />
<select>
                        {selectprograms.map((program) => (
                            <option key={program.id} value={program.name}>
                                {program.name}
                            </option>
                        ))}
                    </select>


{/* <textarea name="" rows="10"  id=""></textarea> */}
<textarea name="" rows={10} id="" cols="70" placeholder='Project Description'></textarea>
<textarea name="" rows={10} id="" cols="40" placeholder='Team Members Name'></textarea>
   <input type="url" placeholder='GithubLink' />
<span>
    <p>Upload Project Images</p>
    <input type="file" name="" id="" />

    <input type="file" name="" id="" />
    <button type='submit'>Submit</button>
</span>
    
    
    
    </form>
    </div>
</main>   


</>
  )
}

export default Submit