import React, { useState } from "react";
import { logDOM } from '@testing-library/react';
import "./Navbar.css"
import { Link } from "react-router-dom";



export const Navigation = ({isScrolling}) => {
  return (
    <>
      <header class="header">
        <ul class="header-ul">
          <li><h1 className="header-m">MUSEO</h1></li>
          <li><a class="header-a" href="/">Inicio</a></li>
          <li><a class="header-a" href="/Mapas">Mapa</a></li>
          <li><a class="header-a" href="/Exposiciones">Exposiciones</a></li>
          <li><a class="header-a" href="/VisitasGuiadas">Visitas Guiadas</a></li> 
        </ul>
      </header> 
    </>
  );
};



export default Navigation;