import React from "react";

/* IMPORTA COMPONENTI */
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";

function WorkPagedx() {
  return (
    <Container>

<Col>
<Card className="m-0" style={{ width: "18rem" }}>

  <Card.Body>
    <Container>
      <Row>
        <Col>
          <Col className="d-flex flex-column " >
            
              <div className="d-flex">
                
                <div>
                <Card.Title className="h6 m-0">
                  titolo notizia
                </Card.Title>
                  <Card.Subtitle className="text-muted h6 m-0">
                    sottotitolo - xxx lettori
                  </Card.Subtitle>
                </div>
                </div>
          </Col>
        </Col>
      </Row>
    </Container>
  </Card.Body> 
  <Card.Footer className="bg-transparent border-0 m-0">
    <div className=" d-flex justify-content-center">
      <Button className=" border-0 bg-transparent text-secondary p-0" size="sm">
        Mostra altro
      </Button>{" "}
    </div>
  </Card.Footer>
</Card>
</Col>
    </Container>
  );
}

export default WorkPagedx;



