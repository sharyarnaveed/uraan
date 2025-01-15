import React from 'react'

function errorFlashCard({color,msg}) {
  return (
    <div  className='flashcard' style={{backgroundColor:color,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5rem",color:"white"}}>
      
      {msg}</div>
  )
}

export default errorFlashCard