import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {


  const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length==0 && password.length==0)
      {
        alert("Enter all the fields")
      }
      else if(username.length==0){
        alert("Enter username")
      }
      else if(password.length==0){
        alert("Enter Password!")
      }
   else{
      navigate("/home")
   }}

  return (
    <div className='container'>
      <div className='cover'> 
        <div className='jobim'>
          <img src='https://images.pexels.com/photos/6393005/pexels-photo-6393005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="cover" height={370} width={350} />
        </div>  

        <h2>Login</h2>
        
        <form className="form-wrapper">
          <input type='text' placeholder='Username' className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
          <input type='password' placeholder='Password' className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
          <button className ="bu" type='submit' onClick={formHandler}>Login</button>
        </form>

        <Link to={"/forgetpassword"} className='forgetpass'>Forget Password</Link>
        <Link to={"/register"} className='login-register'>Don't have an account..??</Link>

      </div>
    </div>
  );
}