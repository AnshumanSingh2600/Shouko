
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Navbar from '../src/components/Navbar'
import Register from "../src/Pages/Register"
import Login from "../src/Pages/Login"
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import { UserContext } from '../context/userContext'
import { useContext } from "react"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true


function App() {
  const {user}= useContext(UserContext);
  const navigate = useNavigate();
  const [isLoginChecked, setIsLoginChecked] = useState(false);
  
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('/profile');
        if (response.data) {
          setIsLoginChecked(true); // Update flag for redirection
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
  
    checkLoginStatus();
  }, []);
  
   

 return (
  
   
    <UserContextProvider>

      <Toaster position='bottom-right' toastOptions={{duration :2000}}/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/register' element={isLoginChecked ? ( <Navigate to="/" replace />) :<Register/>} />
        <Route path='/login' element={isLoginChecked ? ( <Navigate to="/" replace />) : <Login/>} />

       
        
        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
    
      </UserContextProvider>
  )
}

export default App
