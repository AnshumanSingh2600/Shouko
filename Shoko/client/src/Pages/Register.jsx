import React from 'react'
import'./css/login.css'
import {useState} from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const Navigate= useNavigate();
  const [data,setData]=useState({
    name: '',
    email: '',
    password: '',
  })
  const registerUser=async (e)=>{
    e.preventDefault();
    const {name,email,password}=data
    try {
      const {data}=await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
      }
      else
      {
        setData({})
        toast.success('login Successful. Welcome!')
        Navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <div className="registerBody">
           
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input 
                    type='text' 
                    placeholder='Enter Name' 
                    value={data.name} 
                    onChange={(e )=>setData({...data,name: e.target.value})}
                />

                <label>Email</label>
                <input 
                    type='Email' 
                    placeholder='Enter Email' 
                    value={data.email} 
                    onChange={(e )=>setData({...data,email: e.target.value})}
                />

                <label>Password</label>
                <input 
                    type='Password' 
                    placeholder='Enter Password'
                    value={data.password} 
                    onChange={(e )=>setData({...data,password: e.target.value})}
                />

                <button type='submit'> Submit</button>
            </form>
            
        </div>
    </div>
  )
}
