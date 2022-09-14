import {useState, useEffect} from 'react';
import Navigation from '../components/Navigation/Navbar';
import './VisitasGuiadas.css';

import React from 'react'

function VisitasGuiadas() {
  return (
    <div className="VisitasGuiadas">
        <Navigation />
        <h1 className="main-title">Visitas</h1>
        <div className="main-div">
            <div className="img-div"></div>
            <div className="about-div">
              <h3 className="h">Nombre de la Visita:</h3>
              <div className="circle-div">
                <div className="circle"></div>
                <h6 className="first-h">Encargado:</h6>
              </div>
              <h6 className="second-h">Idioma de la visita:</h6>
              <h6 className="third-h">Fecha y horario:</h6>
              <h6 className="fourth-h">Espacios disponibles:</h6>
              <div className="buttons-div">
                <a className="btn-ins" href="/Inscripcion">Inscribirme</a>
                <a className="btn-rec" href="#">Recorrido</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default VisitasGuiadas