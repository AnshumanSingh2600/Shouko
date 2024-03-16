import React, { useState } from 'react'
import'./css/login.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PiDetective } from "react-icons/pi";
import { MdOutlinePassword } from "react-icons/md";
export default function Login() {

  const navigate=useNavigate();
  const[data,setData]=useState({
    email:'',
    password:'',
  })
  const loginUser=async (e)=>{
   e.preventDefault()
   const{email,password}=data
   try {
    const{data}=await axios.post('/login',{
      email,
      password
    })
    if(data.error)
    {
      toast.error(data.error)
    }
    else{
      setData({});
      toast.success('login Successful. Welcome!')
      var delayInMilliseconds = 500; //1 second

setTimeout(function() {navigate('/');
  //your code to be executed after 1 second
}, delayInMilliseconds);
      

    }
   } catch (error) {
    console.log(error)

   }
   }
  return (
    <>
    <Navbar/>
    <div className="loginBody">
     
     <div className="loginForm">
         <form onSubmit={loginUser}>
             <h1>Login</h1>
             <div className='input-box'>
                 <input 
                     type='Email' 
                     placeholder='Email'
                     value={data.email} 
                     onChange={(e )=>setData({...data,email: e.target.value})}
                 />
                 <div className='iconsLogin'>
                     <PiDetective />
                 </div>
             </div>

             
             <div className='input-box'>
                 <input 
                     type='Password' 
                     placeholder='Password'
                     value={data.password} 
                     onChange={(e )=>setData({...data,password: e.target.value})}
                 />
                 <div className='iconsLogin'>
                     <MdOutlinePassword />
                 </div>
             </div>
             <div className="remember-forgot">
                 <label><input type="checkbox" />Remember me</label>
                 <a href="#">Forgot password?</a>
             </div>

             <button type='submit'> Login</button>
         </form>
     </div>
 </div>
    </>
    
  )
}
