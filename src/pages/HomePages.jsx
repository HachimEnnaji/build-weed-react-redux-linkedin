import React from "react";
/* IMPORTA COMPONENTI */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HomePageLeft from "../components/HomePageLeft";

function HomePages() {
  return (
    <Container className="d-flex justify-content-center mt-3">
      <Row>
        <Col xs={2}>
          <Card>
          <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={7}>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
       <HomePageLeft/> 
        </Col>
      </Row>
    </Container>
  );
}

export default HomePages;
