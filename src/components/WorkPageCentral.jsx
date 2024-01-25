/* IMPORTA COMPONENTI */
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

function WorkPageLeft() {
  return (
    <Container className="pt-2">
      <Row>
        <Col xs={3}>
          <Col>
            <Card>
              <div>
                <h3>Ricerche di offerte di lavoro suggerite</h3>
              </div>
              <div
                className="mb-4 mb-md-0 d-flex flex-wrap"
                style={{ fontSize: "15px" }}
              >
                <div className="pe-3">
                  <Button variant="outline-primary">remote</Button>{" "}
                </div>
                <div>
                  <Button variant="outline-primary">Marketing manager</Button>{" "}
                </div>
                <div>
                  <Button variant="outline-primary">hr</Button>{" "}
                </div>
                <div>
                  <Button variant="outline-primary">legal</Button>{" "}
                </div>

                <div>
                  <Button variant="outline-primary">sales</Button>{" "}
                </div>

                <div className="pe-3">
                  <Button variant="outline-primary">amazon</Button>{" "}
                </div>
                <div>
                  <Button variant="outline-primary">google</Button>{" "}
                </div>
              </div>
            </Card>
          </Col>

          <Col></Col>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkPageLeft;

<Card className="my-3" style={{ width: "18rem" }}>
  <Card.Header className="bg-transparent border-0">
    <div className=" p-2 ">
      <Card.Title className="h6 font-weight-bold">Titolo sezione</Card.Title>
      <Card.Subtitle className=" text-muted">
        Sulla base del tuo profilo e della tua cronologia delle ricerche
      </Card.Subtitle>
    </div>
  </Card.Header>

        <Card.Body>
          <Container className=" p-2 ">
            <Row className="d-flex flex-column">
              <Col className="">
                <Col className=" d-flex">
                  <div>
                    <Image rounded Circle src="/" />
                  </div>
                  <div>
                    <div>
                      <Card.Title className="d-flex h6 text-capitalized">
                        Titolo lavoro
                      </Card.Title>
                      <Card.Subtitle className="my-2 text-muted h6">
                        Dati Azienda
                      </Card.Subtitle>
                      <Card.Text className="d-flex text-muted h6">
                        <p>data annuncio</p>
                        <p>candidati</p>
                        <div className="d-flex"> <FaLinkedin /> candidatura semplice</div>
                      </Card.Text>
                      <div></div>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
        </Card.Body>
</Card>;
