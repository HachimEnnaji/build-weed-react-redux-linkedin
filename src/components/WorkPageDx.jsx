import React from "react";

/* IMPORTA COMPONENTI */
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsPlayBtnFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { SlNote } from "react-icons/sl";

function WorkPagedx() {
  return (
    <Container>
      <Col>
        <Card className="m-0">
          <Card.Body>
            <Container>
              <Row>
                <Col className="d-flex flex-column ">
                  <Col className="d-flex ">
                    <div className="d-flex">
                      <FaBookmark />
                      <div>
                        <Card.Text className="h6 m-0">
                          le mie offerte di lavoro
                        </Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex">
                      <FaListUl />
                      <div>
                        <Card.Text className="h6 m-0">Preferenze</Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex">
                      <FaRegCalendarCheck />
                      <div>
                        <Card.Text className="h6 m-0">
                          Valutazioni delle competenze
                        </Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex">
                      <BsPlayBtnFill />
                      <div>
                        <Card.Text className="h6 m-0">
                          Indicazioni per chi cerca lavoro
                        </Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex">
                    <IoMdSettings />
                      <div>
                        <Card.Text className="h6 m-0">Impostazioni candidatura</Card.Text>
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className="bg-transparent border-0 m-0">
            <div className=" d-flex justify-content-center">
              <Button
                className=" border-0 bg-transparent text-secondary p-0"
                size="sm"
              >
                Mostra altro
              </Button>{" "}
            </div>
          </Card.Footer>
        </Card>
        <Col className="d-grid gap-2">
          <Button variant="primary" size="lg" className="d-flex">
          <SlNote /> Block level button
          </Button>
        </Col>
      </Col>
    </Container>
  );
}

export default WorkPagedx;
