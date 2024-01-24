import { useState } from "react";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap/esm";
import { useSelector } from "react-redux";

function HomePageDx() {
  const endpoint = "profile";
  const selector = useSelector((state) => state.user.profile);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "",
  });

  useEffect(() => {
    setUser({
      name: selector.name,
      surname: selector.surname,
      email: selector.email,
      username: selector.username,
      bio: selector.bio,
      title: selector.title,
      area: selector.area,
      image: selector.image,
    });
  }, []);
  return (
    <Card className="text-center position-relative">
      <Card.Header style={{ height: "50px" }}>Featured</Card.Header>{" "}
      <div className="pb-4">
        <img
          src={user.image}
          alt="profile"
          width={70}
          height={70}
          className="rounded-circle object-fit-cover position-absolute top-25 start-50 translate-middle"
        />
      </div>
      <Card.Body>
        <Card.Title className="fs-6 mt-2">
          <a href={endpoint} className="h6 text-decoration-none">
            {user.name}
            {user.surname}
          </a>
          <a href="#" className="fs-7 text-decoration-none">
            Aggiungi una foto
          </a>
        </Card.Title>
        <Card.Text className="fs-7">
          {user.area} presso {user.title}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div className="d-flex">
            <div className="fs-7 text-start">
              <p className="mb-0">Cras justo odio</p>
              <strong>Espandi la tua rete</strong>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              ></svg>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
export default HomePageDx;
