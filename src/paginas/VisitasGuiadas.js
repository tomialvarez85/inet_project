import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation/Navbar';
import './VisitasGuiadas.css';
import axios from 'axios';


class VisitaGuiada{
  id = 0;
  cantvisitas = 0;
  tema = '';
  idiomas = '';
  fecha = '';
  encargadofn = '';
  encargadoln = '';
  imageurl = '';

  constructor(id, cantvisitas, tema, fecha, encargadofn, encargadoln, imageurl){
    this.id = id;
    this.cantvisitas = cantvisitas;
    this.tema = tema;
    this.fecha = fecha;
    this.encargadofn = encargadofn;
    this.encargadoln = encargadoln;
    this.imageurl = imageurl
  }
}

function VisitasGuiadas() {

  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    axios.get('https://inet-museum.herokuapp.com/api/v1/guidedvisits/')
    .then(res => {    
      const visitasMapped = res.data.map(x => {
        let visita = new VisitaGuiada(x.id, x.slots, x.topic, x.date_time, x.guide.first_name, x.guide.last_name, x.image);
        x.guide.employee_lenguage.forEach(lang => {
          visita.idiomas += ", " + lang.lenguage_name;
        });
        return visita;
      });

      setVisitas(visitasMapped);
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
                <img src={visita.imageurl} className="img-div"></img>
                <div className="about-div">
                  <h3 className="h">Nombre de la Visita: {visita.tema}</h3>
                <div className="circle-div">
                  <div className="circle"></div>
                  <h6 className="first-h">Encargado: {visita.encargadofn} {visita.encargadoln}</h6>
                </div>
                <h6 className="second-h">Idioma de la visita: {visita.idiomas}</h6>
                <h6 className="third-h">Fecha y horario: {visita.fecha}</h6>
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