import React, { useState } from "react";
import logo from "../LinkedIn_icon.svg.png";
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { BsHandbagFill } from "react-icons/bs";
import { BiSolidMessageRoundedDots, BiSolidGrid } from "react-icons/bi";
import { FaBell } from "react-icons/fa";

function MyNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-white" sticky="top">
      <Container>
        <img src={logo} alt="logo-linkedin" style={{ height: "35px" }} className="mx-2 " />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder=" 🔍  Search"
            className="me-2 navPlaceholder"
            style={{ maxHeight: "100px" }}
            aria-label="Search"
          />
          {/* onSubmit={} */}
          {/* <FaSearch className="magnifying-icon" /> */}
        </Form>
        <Container className="px-5">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" className="me-3 text-center">
                <AiFillHome className="fs-3" />
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="me-3 text-center">
                <HiUsers className="fs-3" />
                Rete
              </Nav.Link>
              <Nav.Link href="#action2" className="me-3 text-center">
                <BsHandbagFill className="fs-3" />
                Lavoro
              </Nav.Link>
              <Nav.Link href="#action2" className="me-3 text-center">
                <BiSolidMessageRoundedDots className="fs-3" />
                Messaggistica
              </Nav.Link>
              <Nav.Link href="#action2" className="me-3 text-center">
                <FaBell className="fs-3" />
                Notifiche
              </Nav.Link>

              <NavDropdown
                title={
                  <span>
                    <FaUserCircle className="fs-3" /> <br /> Tu
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>

              <Container className="border-start ms-3 p-0">
                <Button className="bg-transparent text-dark border-0 me-4" onClick={handleShow}>
                  <BiSolidGrid className="fs-3" />
                  <br /> Per le Aziende <FaCaretDown />
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>

                <Navbar.Text>
                  <a href="#login">Prova premium per 0 €</a>
                </Navbar.Text>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
