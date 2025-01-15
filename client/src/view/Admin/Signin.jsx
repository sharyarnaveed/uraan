import React from "react";
import { useForm } from "react-hook-form";
import "./Signin.css";
import axios from "axios";
function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


const adminsignin=async(data)=>
{
  try {
    console.log(data);
    const responce= await axios.post("/api/admin/login",data)
    console.log(responce);
    
  } catch (error) {
    console.log("cant sign in",error);
    
  }
}


  return (
    <>
      <div className="container_signin">
        <div className="signin-box">
          <h1>Welcome Back</h1>
          <p className="subtitle">Sign in to your account</p>
          <form  onSubmit={handleSubmit(adminsignin)} >
            <div className="input-box">
              <input 
              type="email"
               id="email"
               {...register("adminemail",{
                required:{value:true,message:"Fill The Info"}
               })}
                required />
 
 {
  errors.adminemail&&(
    <span className="error_message">
                *{errors.adminemail.message}
              </span>
  )
 }
 
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <input type="password"
               id="password" 
               {
                ...register("adminpassword",{
                  required:{value:true,message:"Fill the form"}
                })
               }
               required />

{errors.adminpassword && (
              <span className="error_message">
                *{errors.adminpassword.message}
              </span>
            )}


              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
