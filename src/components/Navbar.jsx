import React from 'react'
import logo from '../assests/logo.png'
import { NavLink } from 'react-router-dom'

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-bg'>
        <div className='left'>
            <img src={logo} alt="" />
        </div>
        <div className='right'>
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            <NavLink exact to="/About" activeClassName="active-link" >About</NavLink>
            <NavLink exact to="/Courses" activeClassName="active-link" >Courses</NavLink>
            <NavLink exact to="/Contact" activeClassName="active-link">Contact</NavLink>
        </div>
        </div>
    </div>
  )
}

export default Navbar;