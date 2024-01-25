import { useEffect, useState } from "react";
import { RiArticleLine } from "react-icons/ri";
import { FaItalic, FaList, FaListOl, FaArrowRight, FaPencilAlt } from "react-icons/fa";
import { FaBold, FaLink, FaArrowUpFromBracket } from "react-icons/fa6";
import { ImQuotesRight } from "react-icons/im";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { GoDash } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import FormSave from "./FormSave";
import { useDispatch, useSelector } from "react-redux";

function HomePageModalThree() {
  const data = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchSearch("me"));
  }, []);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="bg-white text-secondary border-0 hoverDiv" onClick={() => handleShow(v)}>
          <RiArticleLine className="mb-1 text-danger me-1" style={{ width: "24px", height: "24px" }} />
          Scrivi un articolo
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Container>
            <Modal.Title>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-circle object-fit-cover me-2"
                  />
                  <div>
                    {data ? (
                      <h6 className="mb-1">
                        {data.name}
                        {data.surname}
                      </h6>
                    ) : (
                      <h6 className="mb-1">User#0022</h6>
                    )}
                    <p className="fs-7 m-0">Singolo articolo</p>
                  </div>
                </div>
                <div className="bg-light rounded-pill px-3 py-2 d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Stile
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="me-4">
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <FaBold className="mb-1" />
                    </Button>
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <FaItalic className="mb-1" />
                    </Button>
                  </div>
                  <div className="me-4">
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <FaList className="mb-1" />
                    </Button>
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <FaListOl className="mb-1" />
                    </Button>
                  </div>
                  <div className="me-4">
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <ImQuotesRight className="mb-1" />
                    </Button>
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <PiBracketsCurlyLight className="mb-1" />
                    </Button>
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <GoDash className="mb-1" />
                    </Button>
                  </div>
                  <div className="me-4">
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <FaLink className="mb-1" />
                    </Button>
                    <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                      <IoCodeSlash className="mb-1" />
                    </Button>
                  </div>
                  <Button className="bg-light text-secondary border-0 hoverDiv p-1 fs-5">
                    <HiOutlinePhoto className="mb-1" />
                  </Button>
                </div>
                <div className="d-flex align-items-center">
                  {/* <Button variant="light" className="me-2 rounded-pill border border-2 border-primary text-primary">GE</Button> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      className="bg-white hoverDiv me-2 rounded-pill border border-2 border-primary text-primary"
                      id="dropdown-basic"
                    >
                      Gestisci
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="primary" className="rounded-pill">
                    Avanti <FaArrowRight className="ms-1 mb-1" />
                  </Button>
                </div>
              </div>
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <div className="text-center bg-light my-auto py-5 border border-1 mb-5">
                <img src="https://static.licdn.com/aero-v1/sc/h/8x7kwtluy3rlydstzy8b6tywc" className="mb-5" />
                <p className="mb-5">Consigliamo di caricare o trascinare un’immagine di 1920x1080 pixel</p>
                <Button className="bg-light hoverDiv me-2 rounded-pill border border-1 border-secondary text-secondary">
                  <FaArrowUpFromBracket /> Carica dal computer
                </Button>
                <Button className="bg-light hoverDiv me-2 rounded-pill border border-1 border-secondary text-secondary">
                  <FaPencilAlt /> Crea un design
                </Button>
              </div>
              <p className="h1">Qualifica</p>
              <FormSave />
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HomePageModalThree;
