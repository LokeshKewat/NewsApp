import React, {Component} from "react";

import { Link } from 'react-router-dom';
const Navbar =()=>  {
   return (
    
     <div className="nav">
        <div className="logo">
          <img src={"../logo111.png" }  />
        </div>

        <div className="pages">


          <div className="set">
          <Link className="text" to="/">Home </Link>
          </div>

        <div className="set">
        <Link className="text" to="/About">About </Link>
        </div>

      <div className="set">
        <Link className="text" to="/Contact">Contact</Link>
        </div>


        </div>
      </div>
      
    );
  }
  export default Navbar;

