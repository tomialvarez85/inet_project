import React from "react";
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./VisitCard.css"

function VisitCard() {
    return(
        <Container className="visit-card" fluid>
            <Row>
                <Col lg={5} md={12} sm={12}>
                    <div className="visit-img"></div>
                </Col>

                <Col>
                    <div className="visit-description">
                        <h2>Nombre de la Visita</h2>
                        <hr className="bold-hr"></hr>

                        <div className="visit-guide">
                            <div className="guide-photo"></div>
                            <p className="guide-name">Encargado:</p>
                        </div>

                        <p className="visit-item">Idioma de la visita:</p>
                        <p className="visit-item">Fecha y horario:</p>
                        <p className="visit-item">Espacios disponibles:</p>

                        <div className="visit-btns">
                            <button className="button btn-ins" href="/Inscripcion">Inscribirme</button>
                            <Link className='button btn-rec' to="/VisitasGuiadas">Recorrido</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default VisitCard