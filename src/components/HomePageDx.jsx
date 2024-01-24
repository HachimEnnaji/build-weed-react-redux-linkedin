import { useState } from "react";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { HiUserPlus } from "react-icons/hi2";
import { FaBookmark } from "react-icons/fa6";
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
          <div>
            <a href="#" className="fs-7 text-decoration-none">
              Aggiungi una foto
            </a>
          </div>
        </Card.Title>
        <Card.Text className="fs-7">
          {user.title} presso {user.title}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="hoverDiv">
          <div className="d-flex align-items-center justify-content-between ">
            <div className="fs-7 text-start">
              <p className="mb-0">Collegamenti</p>
              <strong>Espandi la tua rete</strong>
            </div>
            <HiUserPlus />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="hoverDiv">
          <div className="fs-7 text-start">
            <p className="mb-0">Accedi a strumenti e informazioni in esclusiva</p>
            <div>
              <strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="orange"
                  className="me-1"
                >
                  <rect width="24" height="24" rx="4" ry="4" />
                </svg>
                Prova premium per 0 EUR
              </strong>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="hoverDiv d-flex align-items-center fs-7">
          <FaBookmark className="me-2" />
          <strong>I miei elementi</strong>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default HomePageDx;
