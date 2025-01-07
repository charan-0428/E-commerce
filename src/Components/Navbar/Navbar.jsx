import React from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>E-com</p>
      </div>
      <div className="nav-menu">
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/mens'>Men</Link></li>
        <li><Link to='/womens'>Women</Link></li>
        <li><Link to='/kids'>Kid</Link></li>
      </div>
      {/* <div className="nav-search">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div> */}
      <div className="nav-login-cart">
        <Link to='/login'><button>Login/SignUp</button></Link>
        <Link to='cart'><img src={cart_icon} className="carticon" alt="Cart" /></Link>
        
      </div>
    </div>
  );
}

export default Navbar;
