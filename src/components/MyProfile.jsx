import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-bootstrap-icons";
import { VscMail } from "react-icons/vsc";
// import { logo } from "../LinkedIn_icon.svg.png";

function MyProfile() {
  const data = useSelector((state) => state.user.data);
  const [show, setShow] = useState(false);
  const endpoint = "profile/";
  const link = "https://striveschool-api.herokuapp.com/api/profile/";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const capitalizeName = (name) => {
  //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  //   };
  return (
    <>
      <Col xs={9}>
        <Card className="m-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            height={200}
            className="object-fit-cover "
          />
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <img
                  src={data.image}
                  alt="user"
                  width={150}
                  height={150}
                  className="rounded-circle object-fit-cover ms-3"
                  style={{ position: "absolute", top: 100, left: 0 }}
                />
              </div>
              <div>
                <Button className="bg-transparent text-dark rounded-circle border-0">
                  <FaPencilAlt />
                </Button>
              </div>
            </div>
            <Row>
              <Col xs={9}>
                <h3 className="text-capitalize">
                  {data.name} {data.surname}
                </h3>
                <p>{data.title}</p>
                <span>{data.area}</span>
                <Button
                  variant="primary"
                  className="border-0 bg-transparent text-primary button-hover"
                  onClick={handleShow}
                >
                  Informazioni di contatto
                </Button>
                <p>{data.bio}</p>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-capitalize">
                      {data.name} {data.surname}
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Container fluid className="d-flex justify-content-between">
                      <p> Informazioni di contatto</p> <FaPencilAlt />
                    </Container>
                  </Modal.Body>
                  <Container className="d-flex pb-3">
                    <img
                      src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-o354wle6.png"
                      style={{ heigth: "30px", width: "30px" }}
                      alt="logo linkedin"
                      className="img-contain"
                    />
                    <Container fluid>
                      <p className="m-0 ">Il tuo Profilo</p>
                      {/* <Link to={"/:id"} > </Link> */}
                      <a href={`${link}${data._id}`} className="link-hover">
                        {endpoint}
                        {data._id}
                      </a>
                    </Container>
                  </Container>
                  <Container className="d-flex pb-4">
                    <VscMail className="fs-2" />
                    <Container fluid>
                      <p className="m-0">Email</p>
                      {/* <Link to={"/:id"} > </Link> */}
                      <a href={`mailto:${data.email}`} className="link-hover">
                        {data.email}
                      </a>
                    </Container>
                  </Container>
                </Modal>
              </Col>
              <Col xs={3}>
                <Container className="d-flex align-items-center">
                  <img
                    src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg"
                    alt="epicode logo"
                    height={30}
                  />
                  <a href="https://epicode.com" className="link-hover">
                    <h6 className="text-black  m-0 hover">EPICODE</h6>
                  </a>
                </Container>
              </Col>
            </Row>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default MyProfile;
