import React from "react";
/* IMPORTA COMPONENTI */
import { Col, Container, Row } from "react-bootstrap";
import WorkPageLeft from "./WorkPageLeft";
import WorkPageDx from "./WorkPageDx";
import WorkPageCentral from "./WorkPageCentral";

function WorkPage() {
  return (
    <Container className="d-flex justify-content-center mt-3">
      <Row>
        <Col xs={3}>
          <WorkPageDx />
        </Col>

        <Col xs={6}>
          <WorkPageCentral />
        </Col>

        <Col xs={3}>
          <WorkPageLeft />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkPage;
