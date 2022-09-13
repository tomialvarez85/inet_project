import React, {useState, useEffect} from 'react';
import './App.css';
import Home from "./paginas/Home";
import VisitasGuiadas from './paginas/VisitasGuiadas';
import Exposiciones from './paginas/Exposiciones';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mapas from './paginas/Mapas';


function App() {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/VisitasGuiadas" element= {<VisitasGuiadas />} />
          <Route path="/Exposiciones" element= {<Exposiciones />} />
          <Route path="/Mapas" element= {<Mapas />} />
        </Routes>
      </BrowserRouter>
    
    );
  


  }

export default App;
