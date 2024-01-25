import React, { useState, useEffect } from "react";
import logo from "../LinkedIn_icon.svg.png";
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas, Spinner } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchSearch } from "../redux/actions/fecthData";

function MyNavbar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchSearch("me"));
    const handleScroll = () => {
      // Sostituisci 200 con la soglia di scroll desiderata
      setIsVisible(window.scrollY > 500);
    };

    // Aggiungi un listener per l'evento di scroll
    window.addEventListener("scroll", handleScroll);

    // Pulisci l'evento di scroll quando il componente si smonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const data = useSelector((state) => state.user.profile);

  return (
    <>
      <Navbar expand="lg" className="bg-white" sticky="top">
        <Container>
          <img src={logo} alt="logo-linkedin" style={{ height: "35px" }} />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=" 🔍  Search"
              className="ms-2 navPlaceholder"
              style={{ maxHeight: "100px" }}
              aria-label="Search"
            />
            {/* onSubmit={} */}
            {/* <FaSearch className="magnifying-icon" /> */}
          </Form>
          <Container className="">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <NavLink to={"/"} href="#action1" className="me-3 p-0 text-center nav-link text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                  </svg>
                  Home
                </NavLink>
                <Nav.Link href="#action2" className="me-3 p-0 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  Rete
                </Nav.Link>
                <Nav.Link href="#action2" className="me-3 p-0 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                  Lavoro
                </Nav.Link>
                <Nav.Link href="#action2" className="me-3 p-0 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                  Messaggistica
                </Nav.Link>
                <Nav.Link href="#action2" className="me-3 p-0 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                  Notifiche
                </Nav.Link>

                <NavDropdown
                  title={
                    <>
                      <>
                        {data ? (
                          <img
                            src={data.image}
                            alt="profile"
                            width={26}
                            height={26}
                            className=" rounded-circle d-block mt-1"
                          />
                        ) : (
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        )}
                      </>
                      <span>Tu</span>
                    </>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3" className=" mt-3">
                    <Container fluid className="d-flex ">
                      {data ? (
                        <>
                          {" "}
                          <img
                            src={data.image}
                            alt="profile"
                            width={50}
                            className="rounded-circle d-block align-self-start mt-1"
                          />
                          <Container fluid className="text-dark">
                            <Link to="/main">
                              <p className="text-capitalize my-1 text-dark">
                                {data.name} {data.surname}
                              </p>
                            </Link>
                            <p className="text-capitalize mb-2">{data.title ? data.title : ""}</p>
                          </Container>
                        </>
                      ) : (
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      )}
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>

                <Container className="border-start ms-3 p-0 d-flex">
                  <Button className="bg-transparent text-dark border-0 text-nowrap" onClick={handleShow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match m-0"
                      width="26"
                      height="26"
                      focusable="false"
                    >
                      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                    </svg>
                    {/* <BiSolidGrid className="fs-3 " height={24} width={24}/> */}
                    <br />{" "}
                    <div>
                      <p className="mt-1">
                        Per le Aziende <FaCaretDown />{" "}
                      </p>
                    </div>
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
                    <a href="#login" className="text-center">
                      Prova Premium <br /> per 0 €
                    </a>
                  </Navbar.Text>
                </Container>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
      <Container fluid className={` ${isVisible ? "visible-scroll" : "profile-scroll"} bg-light shadow-lg p-0`}>
        <Container fluid>
          <Container className="d-flex">
            {data ? (
              <img
                src={data.image}
                alt="profile"
                height={45}
                width={45}
                className="rounded-pill position-relative object-fit-cover"
              />
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {/* <Badge bg="success p-2 rounded-pill position-absolute bottom-0 end-0"> </Badge> */}
            {data ? (
              <Container>
                <h5>
                  {data.name} {data.surname}
                </h5>
                <h5 className="mb-0 fw-light"> {data.title} </h5>
              </Container>
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default MyNavbar;
