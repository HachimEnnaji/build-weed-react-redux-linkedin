import React from "react";
/* IMPORTA COMPONENTI */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import HomePageFooter from "../components/HomePageFooter";

import { BiSolidInfoSquare } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
import Articles from "./Articles";

function HomePageLeft() {
  return (
    <Container>
      <Col>
        <Card className="m-0" style={{ width: "18rem" }}>
          <Card.Header className=" d-flex justify-content-between bg-transparent border-0 ">
            <Card.Title className="h5 font-weight-bold d-flex align-items-end m-0">Linkedin Notizie</Card.Title>
            <BiSolidInfoSquare />
          </Card.Header>
          {/* <Card.Body>
            <Container>
              <Row>
                <Col>
                  <Col className="d-flex flex-column " >
                    
                      <div className="d-flex">
                        <TbPointFilled />
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
          </Card.Body> */}
          {/* REFACTOR ARTICLES COMPONENT */}
          <Articles />
          <Card.Footer className="bg-transparent border-0 m-0">
            <div className=" d-flex justify-content-center">
              <Button className=" border-0 bg-transparent text-secondary p-0" size="sm">
                Mostra altro
              </Button>{" "}
            </div>
          </Card.Footer>
        </Card>
      </Col>

      <Card className="my-2">
        <Image src="https://placehold.jp/150x150.png" rounded className="border border-warning" />
      </Card>
      <Col>
        <HomePageFooter></HomePageFooter>
      </Col>
    </Container>
  );
}

export default HomePageLeft;
