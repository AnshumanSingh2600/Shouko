
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Navbar from '../src/components/Navbar'
import Register from "../src/Pages/Register"
import Login from "../src/Pages/Login"
function App() {

  return (
    <>
      <Navbar/>
      <div>yo</div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
