import { useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function HomePageModalTwo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-white text-secondary border-0 hoverDiv" onClick={handleShow}>
        <MdOutlineCalendarMonth className="mb-1 text-warning me-1" style={{ width: "24px", height: "24px" }} />
        Calendar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center pb-5 pt-3 hoverDiv">
            <img src="https://img.lovepik.com/element/45007/5929.png_860.png" alt="camera" width={100} />
            <h6>Carica l'immagine di copertina</h6>
            <p>Larghezza minima 480 pixel, rapporto consigliato 16:9</p>
          </div>
          <Form>
            <Form.Group controlId="formEventType" className="mb-3">
              <Form.Label>Tipo di evento</Form.Label>
              <div className="d-flex">
                <Form.Check type="radio" label="Online" name="eventType" id="eventType1" className="me-3" />
                <Form.Check type="radio" label="In sede" name="eventType" id="eventType2" className="me-3" />
              </div>
            </Form.Group>

            <Form.Group controlId="formEventName" className="mb-3">
              <Form.Label>Nome evento</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il nome dell'evento" />
            </Form.Group>
            <Form.Group controlId="formEventTimezone" className="mb-3">
              <Form.Label>Fuso orario</Form.Label>
              <Form.Control as="select">
                <option value="EST">Eastern Standard Time (EST)</option>
                <option value="CST">Central Standard Time (CST)</option>
                <option value="MST">Mountain Standard Time (MST)</option>
                <option value="PST">Pacific Standard Time (PST)</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formEventStartDate" className="d-flex justify-content-between mb-1">
              <div>
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control type="date" />
              </div>
              <div>
                <Form.Label>Ora di inizio</Form.Label>
                <Form.Control type="time" />
              </div>
            </Form.Group>
            <Form.Check type="checkbox" label="Aggiungi data e ora di fine" className="mb-2" />
            <Form.Group controlId="formEventEndDate" className="d-flex justify-content-between mb-3">
              <div>
                <Form.Label>Data di fine</Form.Label>
                <Form.Control type="date" />
              </div>
              <div>
                <Form.Label>Ora di fine</Form.Label>
                <Form.Control type="time" />
              </div>
            </Form.Group>
            <Form.Group controlId="formEventExternalLink" className="mb-3">
              <Form.Label>Link esterno dell'evento</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il link esterno" />
            </Form.Group>
            <Form.Group controlId="formEventDescription" className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formSearch">
              <Form.Label>Speaker</Form.Label>
              <div className="search-input">
                <FaSearch className="search-icon" />
                <Form.Control type="text" placeholder="Inserisci il link esterno" />
              </div>
            </Form.Group>
          </Form>
          <Form.Text className="fs-7">
            <p>
              Aggiungi collegamenti come speaker dell’evento. Gli speaker possono unirsi all’evento prima degli altri, e
              verranno mostrati nella sezione Dettagli e nell’area dei presentatori dell’evento. Non possono dare la
              parola di partecipanti o terminare l’evento.
            </p>
            <p>
              Se continui, accetti le <a href="#"> norme sugli eventi di LinkedIn.</a>
            </p>
            <p>
              Sfrutta tutti i vantaggi di LinkedIn Events. <a href="#">Per saperne di più</a>
            </p>
          </Form.Text>
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
    </>
  );
}

export default HomePageModalTwo;
