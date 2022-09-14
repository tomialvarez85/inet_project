import React, {useState, useEffect} from 'react';
import './App.css';
import Home from "./paginas/Home";
import VisitasGuiadas from './paginas/VisitasGuiadas';
import Exposiciones from './paginas/Exposiciones';
import InscripcionConfirmada from './paginas/InscripcionConfirmada';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mapas from './paginas/Mapas';
import Inscripcion from './paginas/Inscripcion';


function App() {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/VisitasGuiadas" element= {<VisitasGuiadas />} />
          <Route path="/Exposiciones" element= {<Exposiciones />} />
          <Route path="/Mapas" element= {<Mapas />} />7
          <Route path="/Inscripcion" element= {<Inscripcion />} />
          <Route path="/InscripcionConfirmada" element= {<InscripcionConfirmada />} />
        </Routes>
      </BrowserRouter>
    
    );
  


  }

export default App;
