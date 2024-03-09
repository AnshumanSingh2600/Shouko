import React from 'react'
import {useState} from "react"

export default function Register() {
  const registerUser=()=>{
    e.preventDefault()
  }
  return (
    <div>
     <form onSubmit={registerUser}>
      <label>Name</label>
      <input type='text' placeholder='Enter Name'/>
      <label>Email</label>
      <input type='Email' placeholder='Enter Email'/><label>Name</label>
      <label>Password</label>
      <input type='Password' placeholder='Enter Password'/><label>Name</label>
      <button type='submit'> Submit</button>
      
      
      
     </form>
    </div>
  )
}
