import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Button, Card, Col } from "react-bootstrap";

function MySidebar() {
  return (
    <Col xs={3}>
      <Col>
        <Card className="my-3" style={{ width: "18rem" }}>
          <Card.Body className="p-2" >
          
              <Card.Header className="bg-transparent d-flex justify-content-between">
              <div>
                <Card.Title className="h5">Lingua del profilo</Card.Title>
                <Card.Subtitle className="my-2 text-muted h6">
                  Card Subtitle
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
                  Card Subtitle
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
    </Col>
  );
}

export default MySidebar;
