import React, { useState } from "react";
import logo from "../LinkedIn_icon.svg.png";
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

function MyNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="logo-linkedin" style={{ height: "35px" }} className="mx-2 " />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=" 🔍  Search"
              className="me-2 "
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Rete</Nav.Link>
                <Nav.Link href="#action2">Lavoro</Nav.Link>
                <Nav.Link href="#action2">Messaggistica</Nav.Link>
                <Nav.Link href="#action2">Rete</Nav.Link>

                <NavDropdown title="Tu" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>

                <Container className="border-start ms-3 p-0">
                  <Button className="bg-transparent text-dark border-0" onClick={handleShow}>
                    Per le Aziende <FaCaretDown />
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
                </Container>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;
