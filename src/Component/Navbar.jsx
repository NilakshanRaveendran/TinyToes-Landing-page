import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <img src={logo} alt="logo" className='logo'/>
          <div className="links">
              <Link to = "/">Home</Link>
              <Link to = "/about">About</Link>
              <Link to = "/contact">Contact</Link>
              <button class="button">Sign up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar;