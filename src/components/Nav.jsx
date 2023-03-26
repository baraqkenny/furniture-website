import React, { useState } from 'react';
import Cart from './Cart';
import './Nav.css';


const Nav = () => {


  return (
    <nav className="nav">
      <a href=''>furniture</a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>

      <div className='cart-icon-container'>
        <Cart/>
      </div>


    </nav>
  );
}

export default Nav
