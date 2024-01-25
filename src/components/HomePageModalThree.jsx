import { useState } from "react";
import { RiArticleLine } from "react-icons/ri";
import { FaItalic, FaList, FaListOl } from "react-icons/fa";
import { FaBold, FaLink } from "react-icons/fa6";
import { ImQuotesRight } from "react-icons/im";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { GoDash } from "react-icons/go";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

function HomePageModalThree() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="bg-white text-secondary border-0 hoverDiv" onClick={() => handleShow(v)}>
          <RiArticleLine className="mb-1 text-danger me-1" style={{ width: "24px", height: "24px" }} />
          Full screen
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
                    <h6 className="mb-1">Nome Cognome</h6>
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
                  <FaBold />
                  <FaItalic />
                  <FaList />
                  <FaListOl />
                  <ImQuotesRight />
                  <PiBracketsCurlyLight />
                  <GoDash />
                  <FaLink />
                </div>
              </div>
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

export default HomePageModalThree;
