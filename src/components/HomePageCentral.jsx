import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function HomePageCentral() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center">
          <img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            width={50}
            height={50}
            className="rounded-circle object-fit-cover me-2"
          />
          <div className="flex-grow-2 ">
            <Button
              variant="light"
              className="me-2 rounded-pill border border-1 border-dark w-100"
              style={{ height: "50px" }}
              onClick={handleShow}
            >
              Avvia un post
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="d-flex align-items-center hoverDiv p-2 rounded-2">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-circle object-fit-cover me-2"
                      />
                    </div>
                    <div>
                      <h5>Nome Cognome</h5>
                      <p className="fs-7 m-0">Pubblica: Chiunque</p>
                    </div>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="border-0" as="textarea" placeholder="Di cosa vorresti parlare?" rows={3} />
                  </Form.Group>
                  <Button className="border-0  bg-transparent  text-black ms-2 mb-2">
                    <CiFaceSmile className="hoverDiv rounded-circle" />
                  </Button>
                  <div>
                    <Button
                      variant="light"
                      className="border-0 text-black rounded-circle me-2 modalButtonHover"
                      style={{ height: "56px", width: "56px" }}
                    >
                      <HiOutlinePhotograph className="mb-1 fs-5" />
                    </Button>
                    <Button
                      variant="light"
                      className="border-0 text-black rounded-circle me-2 modalButtonHover"
                      style={{ height: "56px", width: "56px" }}
                    >
                      <BsCalendar3 className="mb-1 fs-5" />
                    </Button>
                    <Button
                      variant="light"
                      className="border-0 text-black rounded-circle me-2 modalButtonHover"
                      style={{ height: "56px", width: "56px" }}
                    >
                      <TiStarburst className="mb-1 fs-5" />
                    </Button>
                    <Button
                      variant="light"
                      className="border-0 text-black rounded-circle me-2 modalButtonHover"
                      style={{ height: "56px", width: "56px" }}
                    >
                      <HiOutlineDotsHorizontal className="mb-1 fs-5" />
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomePageCentral;
