import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Modal from "../../components/Modal";
import { useModal } from "../../components/useModal"

import "./ExhibitionCard.css"

function ExhibitionCard(props) {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return(

        <Col  lg={4} md={6} sm={12}>
            <div className="exhib-card">
                <div className="exhib-photo">
                    {props.phto}
                    <button className="exhib-open-btn" onClick={openModal1}></button>    
                </div>
                <h3 className="exhib-name">{props.exhibName}</h3>
            </div>

            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>

                <Container className="modal-card" fluid>
                    <Row>
                        <Col lg={5} md={12} sm={12}>
                            <div className="modal-exhib-photo"></div>
                        </Col>

                        <Col>
                            <div className="modal-exhib-description">
                                <h1>{props.exhibName}</h1>
                                <hr className="bold-hr"></hr>

                                <p className="exhib-modal-description">{props.exhibDescription}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Modal>

        </Col>

    );
}

export default ExhibitionCard;