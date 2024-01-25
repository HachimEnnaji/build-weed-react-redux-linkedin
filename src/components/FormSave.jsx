import React, { useState } from "react";
import { Form, FormGroup, Button, Container } from "react-bootstrap";

const FormSave = () => {
  const [testoBozza, setTestoBozza] = useState("");

  const handleTestoBozzaChange = (e) => {
    setTestoBozza(e.target.value);
  };

  const salvaBozza = () => {
    // Aggiungi il codice per salvare la bozza qui
    console.log("Bozza salvata:", testoBozza);
  };

  return (
    <Form>
      <FormGroup controlId="formTestoBozza">
        <Form.Label>Bozza di Testo</Form.Label>
        <Form.Control
          className="border-0"
          as="textarea"
          rows={5}
          value={testoBozza}
          onChange={handleTestoBozzaChange}
        />
      </FormGroup>

      <Button
        variant="primary"
        onClick={salvaBozza}
        className="bg-light hoverDiv me-2 rounded-pill border border-1 border-secondary text-secondary"
      >
        Salva Bozza
      </Button>
    </Form>
  );
};

export default FormSave;
