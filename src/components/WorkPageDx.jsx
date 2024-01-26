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
        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col className="d-flex flex-column ">
                  <Col className="d-flex ">
                    <div className="d-flex align-items-center">
                      <FaBookmark size={19} />
                      <div>
                        <Card.Text className="h6 p-3">le mie offerte di lavoro</Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex align-items-center">
                      <FaListUl size={19} />
                      <div>
                        <Card.Text className="h6 p-3">Preferenze</Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex align-items-center">
                      <FaRegCalendarCheck size={23} />
                      <div>
                        <Card.Text className="h6 p-3">Valutazioni delle competenze</Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex align-items-center">
                      <BsPlayBtnFill size={25} />
                      <div>
                        <Card.Text className="h6 p-3">Indicazioni per chi cerca lavoro</Card.Text>
                      </div>
                    </div>
                  </Col>

                  <Col className="d-flex">
                    <div className="d-flex align-items-center">
                      <IoMdSettings size={25} />
                      <div>
                        <Card.Text className="h6 p-3">Impostazioni candidatura</Card.Text>
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className="bg-transparent border-0 p-3">
            <div className=" d-flex justify-content-center">
              <Button className=" border-0 bg-transparent text-secondary p-0" size="sm">
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
