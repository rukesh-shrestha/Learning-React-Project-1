import React from "react";
import Logo from "./Logo"



export default function Header(){
    return (
      <div>  
      <header>
         
    <nav className="navbar navbar-expand-lg navbar-light sticky">
    <div className="container">
     <Logo/> <h3>ReactFacts</h3>
  
       
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
              <a className="nav-link active text-bold" href="#">React Course - Project 1</a>
           </li>
           </ul>
      
         
       </div>
      </div>
    </nav>
    </header>   
    </div>
    );
  }