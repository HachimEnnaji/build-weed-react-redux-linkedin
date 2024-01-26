import React from "react";

/* IMPORTA COMPONENTI */
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsPlayBtnFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { SlNote } from "react-icons/sl";

function WorkPagedx() {
  return (
    <Col>
      <Card className="m-0">
        <Card.Body className="m-0">
          <Container className="m-0">
            <Row style={{ fontSize: "9px" }}>
              <Col className="d-flex flex-column ">
                <Col className="d-flex ">
                  <div className="d-flex my-3">
                    <FaBookmark fontSize="1.5em" />
                    <div>
                      <Card.Text className="mx-3">le mie offerte di lavoro</Card.Text>
                    </div>
                  </div>
                </Col>

                <Col className="d-flex my-2">
                  <div className="d-flex">
                    <FaListUl fontSize="1.5em" />
                    <div>
                      <Card.Text className="mx-3">Preferenze</Card.Text>
                    </div>
                  </div>
                </Col>

                <Col className="d-flex my-2">
                  <div className="d-flex">
                    <FaRegCalendarCheck fontSize="1.5em" />
                    <div>
                      <Card.Text className="mx-3">Valutazioni delle competenze</Card.Text>
                    </div>
                  </div>
                </Col>

                <Col className="d-flex my-2">
                  <div className="d-flex">
                    <BsPlayBtnFill fontSize="1.5em" />
                    <div>
                      <Card.Text className="mx-3">Indicazioni per chi cerca lavoro</Card.Text>
                    </div>
                  </div>
                </Col>

                <Col className="d-flex my-2">
                  <div className="d-flex">
                    <IoMdSettings fontSize="1.5em" />
                    <div>
                      <Card.Text className="mx-3">Impostazioni candidatura</Card.Text>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <Col className="d-grid my-2">
        <Button
          variant="outline-primary"
          size="sm"
          className="d-flex align-self-center justify-content-center rounded-pill"
        >
          <SlNote fontSize="1.3em" /> Pubblica offerta gratuita
        </Button>
      </Col>
    </Col>
  );
}

export default WorkPagedx;
