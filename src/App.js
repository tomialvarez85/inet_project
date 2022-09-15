import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/Navigation/Navbar';
import Home from "./paginas/home/Home";
import VisitasGuiadas from './paginas/visits/VisitasGuiadas';
import Exhibtions from './paginas/exhibitions/Exhibitions';
import Mapas from './paginas/Mapas';

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/styles.css';


function App() {

  
  return (

      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/VisitasGuiadas" element= {<VisitasGuiadas />} />
            <Route path="/Exposiciones" element= {<Exhibtions />} />
            <Route path="/Mapas" element= {<Mapas />} />
          </Routes>
        </BrowserRouter>
      </>
    
    );
  


  }

export default App;
