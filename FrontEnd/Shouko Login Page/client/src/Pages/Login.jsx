import React from 'react'

export default function Login() {
  const loginUser=()=>{
   e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Email</label>
      <input type='Email' placeholder='Enter Email'/><label>Name</label>
      <label>Password</label>
      <input type='Password' placeholder='Enter Password'/><label>Name</label>
      <button type='submit'> Login</button>
      </form>
     
    </div>
  )
}
