import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation/Navbar';
import './Home.css';
import axios from 'axios';


export const Home = () => {

  return (
    <div className="Home">
      
      <Navigation/>
      <div className="main-div">
          <div className="aboutus-div">
            <h2 className="aboutustitle">Bienvenidos al</h2>
            <h2 className="backtitle">Palacio Ferreyra</h2>
            <a className="btn-visitas" href="./VisitasGuiadas">Ver Visitas</a>
            <p className="aboutusp">Conoce más sobre nosotros <a className="btn-aqui" href="#">aqui</a></p>
          </div>
          <div className="imgslider-div"></div>
        </div>
    </div>
  );
  

};

export default Home;