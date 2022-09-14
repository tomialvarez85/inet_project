import React, {useState, useEffect} from 'react';
import './Inscripcion.css';

function Inscripcion() {
  return (
    <div className="Inscripcion">
        <form className="form">
            <label className="label">Ingrese su DNI</label>
            <input className="input" type="number"></input>   
            <div className="teclado">
                <btn className="teclado-btn">1</btn>
                <btn className="teclado-btn">2</btn>
                <btn className="teclado-btn">3</btn>
                <btn className="teclado-btn">4</btn>
                <btn className="teclado-btn">5</btn>
                <btn className="teclado-btn">6</btn>
                <btn className="teclado-btn">7</btn>
                <btn className="teclado-btn">8</btn>
                <btn className="teclado-btn">9</btn>
                <btn className="teclado-btn">0</btn>
                <btn className="teclado-btn">BT</btn>
                <btn className="teclado-btn">BA</btn>
            </div>
            <a href="/InscripcionConfirmada" className="btn-enviar">Enviar</a>
        </form>
    </div>
  )
}

export default Inscripcion