import React from 'react';

import Container from 'react-bootstrap/Container';

import PageHeader from "../../components/PageHeader";
import VisitCard from './VisitCard';

function VisitasGuiadas() {
  return (

    <Container className='page-container' fluid>

      <PageHeader 
        title="Visitas Guiadas"
      />

      <VisitCard />
      <VisitCard />

    </Container>

  );
}

export default VisitasGuiadas;