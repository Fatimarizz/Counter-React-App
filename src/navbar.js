import React from "react";
import {FaShoppingCart } from 'react-icons/fa';


export default function NavBar({ totalCounters }) {
  return (
    <nav className="navbar ">
      <span className="logo"> <FaShoppingCart/></span>
      <span className="logo"><div className="count"> {totalCounters}
        </div></span>
       <span className="logo"
       > Items</span> 
      
    </nav>
  );
};

