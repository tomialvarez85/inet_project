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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4054.3425897004795!2d-64.30563463247564!3d-31.29594592804995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1663195174780!5m2!1ses!2sar" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <a className="btn-visitas" href="./VisitasGuiadas">Ver Visitas</a>
            <p className="aboutusp">Conoce más sobre nosotros <a className="btn-aqui" href="#">aqui</a></p>
          </div>
          <div className="imgslider-div"></div>
        </div>
    </div>
  );
  

};

export default Home;