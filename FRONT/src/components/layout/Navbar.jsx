import React from 'react'
import "./styles/navbar.css";
import { useNavigate } from 'react-router-dom';


import  Logo from '../../assets/logo.png'


export default function NavBar() {
  const navigate = useNavigate();


  return (

  <div className="navBar">


      <div>
        <img src={Logo} alt="Logo do clash royale"  className='logo' onClick={()=> navigate("/")}/>
      </div>

  
  </div>

  );

}
