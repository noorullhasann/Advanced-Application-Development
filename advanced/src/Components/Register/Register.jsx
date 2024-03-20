import React, { useState } from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {


  const[Username,setUsername]=useState("");
  const[Email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmpassword,setconfirmpassword]=useState("");
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(Username.length==0){
        alert("Enter UserName!")
      }
      else if(Email.length==0){
        alert("Enter Email!")
      }
      else if(password.length==0){
        alert("Enter Password!")
      }
      else if(confirmpassword.length==0){
        alert("Enter Confirm Password!")
      }
      else if(password!=confirmpassword){
        alert("Enter Same Password")
      }
   else{
      navigate("/")
   }}

  return (
    <div className='re-container'>
     
      <div className='re-cover'>
        <div className='re-jobim'>
          <img src='https://images.pexels.com/photos/6282022/pexels-photo-6282022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="cover" height={370} width={350}/>
        </div>

        <h2>Registeration</h2>

        <form className='re-form-wrapper'>
        
          <input type='text' placeholder='Username' className="re-form-control" required value={Username} onChange={(e)=>setUsername(e.target.value)}/>
          <input type='email' placeholder='Email' className="re-form-control" required value={Email} onChange={(e)=>setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className="re-form-control" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type='password' placeholder='Confirm Password' className="re-form-control" required value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
          
          <button className ="re-bu" type='submit' onClick={formHandler}>Register</button>
        </form>

      </div>
    
    </div>
  )
}
