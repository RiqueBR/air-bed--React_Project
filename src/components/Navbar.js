import React from 'react';
import { Link } from 'react-router-dom';
import './display.css'

const Navbar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Link className="home-link" to="/">
          <img className="logo" src="/images/WhereBnb-logo.png" alt="Logo" />
        </Link>
        <Link className="booking-link" to='/bookings'>
          My bookings
        </Link>
      </div>
    </header>
  )
}

export default Navbar;
