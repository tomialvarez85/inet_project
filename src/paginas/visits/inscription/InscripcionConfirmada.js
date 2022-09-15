import React, {useState, useEffect} from 'react';
import './InscripcionConfirmada.css';

function InscripcionConfirmada() {
  return (
    <div className="InscripcionConfirmada">
        <div className="mainn-div">
            <div className="top-div">
                <h1 className="main-h">Reserva de Entrada exitosa</h1>
                <h3 className="submain-h">DNI: 45486876</h3>
            </div>
            <div className="bottom-div">
                <h3 className="bottom-h">Nombre de la Visita: </h3>
                <div className="circlee-div">
                    <div className="circlee"></div>
                    <h3 className="hh">Encargado: </h3>
                </div>
                <h3 className="hhh">Idioma de la visita: </h3>
                <h3 className="hhh">Fecha y Horario: </h3>
            </div>
            <a className="btn-aceptar" href="/">Aceptar</a>
        </div>
    </div>
  )
}

export default InscripcionConfirmada