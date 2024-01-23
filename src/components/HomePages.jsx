import React from "react";
/* IMPORTA COMPONENTI */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HomePageLeft from "./HomePageLeft";
import HomePageDx from "./HomePageDx";

function HomePages() {
  return (
    <Container className="d-flex justify-content-center mt-3">
      <Row>
        <Col xs={2}>
          <HomePageDx />
        </Col>

        <Col xs={7}>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <HomePageLeft />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePages;
