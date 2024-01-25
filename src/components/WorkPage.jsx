import React from "react";
/* IMPORTA COMPONENTI */
import { Col, Container, Row } from "react-bootstrap";
import WorkPageLeft from "./WorkPageLeft";
import WorkPageDx from "./WorkPageDx";
import WorkPageCentral from "./WorkPageCentral";

function HomePages() {
  return (
    <Container className="d-flex justify-content-center mt-3">
      <Row>
        <Col xs={2}>
          <WorkPageDx />
        </Col>

        <Col xs={7}>
          <WorkPageCentral />
        </Col>

        <Col xs={3}>
          <WorkPageLeft />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePages;
