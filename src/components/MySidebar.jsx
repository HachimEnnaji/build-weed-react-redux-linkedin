import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function MySidebar() {

  return (
    <Col xs={3}> 
    <Card  className="my-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
  </Col>
  )
}

export default MySidebar;
