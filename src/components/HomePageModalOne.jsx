import { useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HomePageModalOne() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div className="d-flex align-items-center">
        <Button className="bg-white text-secondary border-0 hoverDiv" onClick={() => setLgShow(true)}>
          <HiOutlinePhoto className="mb-1 text-primary" style={{ width: "24px", height: "24px" }} /> Contenuti
          multimediali
        </Button>
      </div>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src="https://img.freepik.com/premium-vector/female-protest-with-empty-blank-flat-line-color-vector-character-demonstration-feminism-editable-outline-full-body-person-white-simple-cartoon-spot-illustration-web-graphic-design_151150-19518.jpg?w=360"
            alt="modal-image"
            width={200}
          />
          <h3>Per iniziare, seleziona i file</h3>
          <p className="text-secondary">Condividi immagini o un solo video nel tuo post</p>
          <Button variant="primary" className="rounded-pill h4">
            Carica dal computer
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
// url(/aero-v1/sc/h/8ho1mw83gfmgiq4yr8f8wkjmh)
export default HomePageModalOne;
