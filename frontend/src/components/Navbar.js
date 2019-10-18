import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return(
    <header>
      <div className="navbar-container">
        <img className="logo" src="/images/WhereBnb-logo.png" alt="Logo"/>
        <Link className="booking-link" to='/bookings'>
        My bookings
        </Link>
      </div>
    </header>
  )
}

export default Navbar;
