import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import About from './About'


const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <img src={logo} alt="logo" className='logo'/>
          <div className="links">
            
              <Link to = "/">Home</Link>
              <Link to = {About} >About</Link>
              <Link to = "/">Contact</Link>
              <button class="button">Sign up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar;