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
                <h6>Encargado:</h6>
                <h6>Idioma de la visita:</h6>
                <h6>Fecha y horario:</h6>
                <h6>Espacios disponibles:</h6>
                <div className="buttons-div">
                    <a className="btn-ins" href="#">Inscribirme</a>
                    <a className="btn-rec" href="#">Recorrido</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisitasGuiadas