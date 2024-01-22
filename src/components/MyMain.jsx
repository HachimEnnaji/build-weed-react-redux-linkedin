// <<<<<<< HEAD
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSearch } from "../redux/actions/fecthData"; // Correggi l'import
// import MyProfile from "./MyProfile";

// function MyMain() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const handleFetch = async () => {
//       await dispatch(fetchSearch());
//     };

//     handleFetch();
//   }, [dispatch]);
//   const data = useSelector((state) => state.user.data);

//   //   console.log(data);

//   return (
//     <>
//       <MyProfile />
//     </>

import React from "react";
import logo from "../LinkedIn_icon.svg.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import MySidebar from "../components/MySidebar";

function MyMain() {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <Card className="m-3">
            <Card.Img variant="top" src={logo} height={200} className="object-fit-cover" />
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  <h3>Nome Cognome</h3>
                  <p>Lavora presso</p>
                  <span>Lavora spanr</span>
                  <a href="#">Informazioni di contatto</a>
                </Col>
                <Col xs={3}>
                  <a href="#">
                    <h5>Posto di Lavoro</h5>
                  </a>
                </Col>
              </Row>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3}>
          {" "}
          <MySidebar />{" "}
        </Col>{" "}
        {/* Questa sezione deve sparire quando la magina non è lg */}
      </Row>
    </Container>
  );
}

export default MyMain;
