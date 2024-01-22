import React, { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { logo } from "../LinkedIn_icon.svg.png";

function MyProfile() {
  const data = useSelector((state) => state.user.data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  return (
    <>
      {data && (
        <>
          <Card>
            <Card.Img variant="top" src={data.image} style={{ height: "30px", width: "30px" }} />

            <Card.Body>
              <h1>
                {data.name} {data.surname}
              </h1>

              <h4>{data.title}</h4>
              <Container className="fluid m-0 d-flex align-items-baseline">
                <p className="text-secondary fs-6 me-2">{data.area}</p>
                <Button
                  variant="primary"
                  className="bg-transparent border-0 text-decoration-underline text-primary"
                  onClick={handleShow}
                >
                  Informazioni di contatto
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {data.name} {data.surname}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Informazioni di contatto </Modal.Body>
                  <Container>
                    <img
                      src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-2ghjmhfo.png"
                      style={{ heigth: "30px" }}
                      alt="logo linkedin"
                    />
                  </Container>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Container>

              <Card.Text>{data.bio}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default MyProfile;
