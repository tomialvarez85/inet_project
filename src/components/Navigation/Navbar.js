import React, { useState } from "react";
import { logDOM } from '@testing-library/react';
import "./Navbar.css"
import { Link } from "react-router-dom";



export const Navigation = ({isScrolling}) => {
  return (
    <>
      <header className="header">
        <ul className="header-ul">
          <li><h1 className="header-m">MUSEO</h1></li>
          <li><a className="header-a" href="/">Inicio</a></li>
          <li><a className="header-a" href="/Mapas">Mapa</a></li>
          <li><a className="header-a" href="/Exposiciones">Exhibiciones</a></li>
          <li><a className="header-a" href="/VisitasGuiadas">Visitas Guiadas</a></li> 
        </ul>
      </header> 
    </>
  );
};



export default Navigation;