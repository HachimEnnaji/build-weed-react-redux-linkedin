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
          <a href="#" className="fs-7">
            Aggiungi una foto
          </a>
        </Card.Title>
        <Card.Text className="fs-7">
          {user.area} presso {user.title}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
export default HomePageDx;
