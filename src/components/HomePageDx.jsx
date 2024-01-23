import { Col } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap/esm";

function HomePageDx() {
  return (
    <Card className="text-center">
      <Card.Header style={{ height: "50px" }}>Featured</Card.Header>
      <div className="mb-4">
        <img
          src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          width={70}
          height={70}
          className="rounded-circle object-fit-cover ms-3"
          style={{ position: "absolute", top: 15, left: 45 }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fs-6">
          <a href="#" className="h6 text-decoration-none">
            Nome Cognome
          </a>
        </Card.Title>
        <Card.Text style={{ fontSize: "12px" }}>Tipo di mansione presso nome aziend</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card.Body>

      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
export default HomePageDx;
