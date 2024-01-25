import React from "react";

/* IMPORTA COMPONENTI */
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HomePageFooter from "../components/HomePageFooter";

function HomePageLeft() {
  return (
    <Container>

      <Col>
        <HomePageFooter></HomePageFooter>
      </Col>

    </Container>
  );
}

export default HomePageLeft;