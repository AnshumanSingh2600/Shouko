import React from 'react'
import {Link} from 'react-router-dom'
import "../components/Topbar.css"

import shokoLogo from  "../assets/shokoTM.png"

const Topbar = () => {
  return (
    <div className='navbar'>
        <a href='#'><img className='navbarLogo' src={shokoLogo}></img></a>
        {/* <section className='topbar'>
            <div className='flex-between py-5 px-4 navbar="'> 
            <link to="/" className="flex gap-3 items-center" />
                 
            </div>

        </section> */}
        {/* <input className='' type="text" placeholder="Search.."/> */}
        <div  className='profile'>
            <form  className='navbarSearch'>
                <input type="text" placeholder="search cases" name="search"/>
                <button className="button" type="submit">Search</button>
            </form>

            <div className='profile2'></div>
        </div>
        
    </div>
  )
}

export default Topbar