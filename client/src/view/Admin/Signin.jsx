import React from 'react'
import "./Signin.css"
function Signin() {
  return (
   <>
   <div class="container_signin">
    <div className="signin-box">
      <h1>Welcome Back</h1>
      <p className="subtitle">Sign in to your account</p>
      <form action="#">
        <div className="input-box">
          <input type="email" id="email" required/>
          <label for="email">Email</label>
        </div>
        <div className="input-box">
          <input type="password" id="password" required/>
          <label for="password">Password</label>
        </div>
        <button type="submit" className="signin-btn">Sign In</button>
       
      </form>
    </div>
  </div>
   </>
  )
}

export default Signin