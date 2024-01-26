import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ModalSearch({ smShow, onHide }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    category: "",
    query: "",
  });
  const handleChange = (propertyName, propertyValue) => {
    setSearch({ ...search, [propertyName]: propertyValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/jobs/${search.category}/${search.query}`);
    onHide();
  };

  return (
    <Modal size="md" aria-labelledby="example-modal-sizes-title-sm" show={smShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Seleziona la tua Categoria:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Select
            name="category"
            aria-label="Default select example"
            value={search.category}
            onChange={(e) => handleChange("category", e.target.value)}
            required
          >
            <option>Cerca per:</option>
            <option value="search">Parola chiave</option>
            <option value="company">Azienda</option>
            <option value="category">Categoria</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Inserisci la tua ricerca:</Form.Label>
            <Form.Control
              type="search"
              aria-label="Search"
              placeholder="Inserisci una parola chiave"
              value={search.query}
              onChange={(e) => handleChange("query", e.target.value)}
              rows={1}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalSearch;
