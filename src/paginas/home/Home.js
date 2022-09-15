import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';


function Home() {

  return (

    <>
      <Container className="page-container" fluid>
        <Row>

          <Col className="land-left" md={6} sm={12}>
              <h1>Bienvenidos <br></br> al museo <br></br> <span className="colored"> Nombre del Museo </span></h1>
              <Link className='btn-visitas' to="/VisitasGuiadas">Ver Visitas</Link>
              <p className='land-about-us'>Conoce más sobre nosotros <span className='colored'>  aquí </span></p>
          </Col>

          <Col md sm={8}>
            <div className="land-img"></div>
          </Col>

        </Row>
      </Container>
    </>

  );
  

};

export default Home;