import React from 'react'
import axios from 'axios';
import { useContext } from "react"
import{UserContext} from "../../context/userContext"
import Navbar from '../components/Topbar'
import Topbar from '../components/Topbar'
import LeftSideBar from '../components/LeftSideBar'
import Model  from 'react-modal';
export default function Home() {
 
 
  
  return (
    <div>

      <Topbar/>
      <LeftSideBar/>

     
    </div>
  )
}
