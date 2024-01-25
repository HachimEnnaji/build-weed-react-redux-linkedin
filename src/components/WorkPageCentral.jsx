/* IMPORTA COMPONENTI */
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function WorkPageCentral() {
  return (
    <Col>
      <Col>
        <Card className="p-1 d-flex justify-content-center">
          <div>
            <h4>Ricerche di offerte di lavoro suggerite</h4>
          </div>
          <div
            className="mb-4 mb-md-0 d-flex flex-wrap"
            style={{ fontSize: "15px" }}
          >
            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> remote
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> Marketing manager
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> hr
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> legal
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> sales
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> amazon
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> google
              </Button>{" "}
            </div>
          </div>
        </Card>
      </Col>

      <Col>
        <Card className="my-3">
          <Card.Header>
            <div className=" p-2 ">
              <Card.Title className="h6 font-weight-bold">
                Titolo sezione
              </Card.Title>
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

                      <Card.Title className="d-flex h6 text-capitalized">
                        Titolo lavoro
                      </Card.Title>

                      <Card.Subtitle className="my-2 text-muted h6">
                        Dati Azienda
                      </Card.Subtitle>

                      <Card.Text className="d-flex align-items-baseline h6">
                        
                        <p className="me-1">data annuncio</p>
                        <p>candidati</p>
                  
                        <div className="d-flex align-items-cente mx-3 ">
                          {" "}
                          <FaLinkedin />  candidatura semplice
                        </div>
                      </Card.Text>

                    </div>
                  </Col>
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

export default WorkPageCentral;
