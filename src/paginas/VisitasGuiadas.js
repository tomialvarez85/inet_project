import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation/Navbar';
import './VisitasGuiadas.css';
import axios from 'axios';


class VisitaGuiada{
  constructor(id, cantvisitas, tema){
    this.id = id;
    this.cantvisitas = cantvisitas;
    this.tema = tema;

  }
}

function VisitasGuiadas() {

  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    axios.get('https://inet-museum.herokuapp.com/api/v1/guidedvisits/')
    .then(res => {
      let i = 0;
      res.data.map(x => {
        setVisitas(olditems => [
          ...olditems, new VisitaGuiada(i++, x.slots, x.topic)
        ])
      });
    }).catch(err => {
      console.log(err)
    })
  }, [])
  

  return (
    <div className="VisitasGuiadas">
        <Navigation />
        <h1 className="main-title">Visitas</h1>
        <div className="main-div">
          {
            visitas.map(visita => (
              <div key={visita.id}>
                <div className="img-div"></div>
                <div className="about-div">
                  <h3 className="h">Nombre de la Visita: {visita.tema}</h3>
                <div className="circle-div">
                  <div className="circle"></div>
                  <h6 className="first-h">Encargado:</h6>
                </div>
                <h6 className="second-h">Idioma de la visita:</h6>
                <h6 className="third-h">Fecha y horario:</h6>
                <h6 className="fourth-h">Espacios disponibles: {visita.cantvisitas}</h6>
                <div className="buttons-div">
                  <a className="btn-ins" href="/Inscripcion">Inscribirme</a>
                  <a className="btn-rec" href="#">Recorrido</a>
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default VisitasGuiadas