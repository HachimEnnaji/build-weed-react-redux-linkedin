import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";

function MySidebar() {
  return (
    <Col xs={3}>
      <Col>
        <Card className="my-3" style={{ width: "18rem" }}>
          <Card.Body className="p-2">
            <Card.Header className="bg-transparent d-flex justify-content-between">
              <div>
                <Card.Title className="h5">Lingua del profilo</Card.Title>
                <Card.Subtitle className="my-2 text-muted h6">
                  Italiano
                </Card.Subtitle>
              </div>
              <div className="d-flex justify-content-end align-items-start border-0">
                <Button className="bg-transparent text-dark d-flex justify-content-end align-items-end p-0 border-0">
                  <FaPencilAlt />
                </Button>
              </div>
            </Card.Header>

            <Card.Footer className="bg-transparent d-flex justify-content-between">
              <div>
                <Card.Title className="h5">Public profile & URL</Card.Title>
                <Card.Subtitle className="my-2 text-muted h6">
                  url-profilo
                </Card.Subtitle>
              </div>
              <div className="d-flex justify-content-end align-items-start border-0">
                <Button className="bg-transparent text-dark d-flex justify-content-end align-items-end p-0 border-0">
                  <FaPencilAlt />
                </Button>
              </div>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: "18rem", height: "16rem" }}>
          {/*CARD IMAGE */}
        </Card>
      </Col>

      <Col>
        <Card className="my-3" style={{ width: "18rem" }}>
          <Card.Header className="bg-transparent border-0">
            <div className=" p-2 ">
              <Card.Title className="h6 font-weight-bold">
                Persone che potresti conoscere
              </Card.Title>
              <Card.Subtitle className=" text-muted">
                Dalla tua scuola o università
              </Card.Subtitle>
            </div>
          </Card.Header>
          <Card.Body>
            <Container className=" p-2 ">
              <Row className="d-flex flex-column " >
              <Col className="me-2">
                    <Image src="https://placehold.jp/50x50.png" roundedCircle />
                  </Col>
                <Col className="d-flex d-flex">
                  <div>
                    <Card.Title className="d-flex h6">nome cognome</Card.Title>
                    <Card.Subtitle className="my-2 text-muted h6">
                      Carriera
                    </Card.Subtitle>
                  </div>
                </Col>
                <Col>
                  <div className=" d-flex ">
                    <Button variant="outline-secondary" size="sm">
                    <HiUserAdd /> Collegati
                    </Button>{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>

          <Card.Footer className="bg-gray">
            <div className=" d-flex justify-content-center">
              <Button
                className="border-0 bg-transparent text-secondary"
                size="sm"
              >
                Mostra altro
              </Button>{" "}
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Col>
  );
}

export default MySidebar;
