import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();
    const buttonClick = () => {
      navigate('/login')
    };

  return (
    <>
    <div className="navbar">
        <img src={logo} alt="logo" className='logo'/>
          <div className="links">
            
              <Link to = "/">Home</Link>
              <Link to = "/" >About</Link>
              <Link to = "/">Contact</Link>
              <button class="button" onClick={buttonClick}>Sign up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar;