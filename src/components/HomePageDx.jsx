import { useEffect } from "react";
import { HiUserPlus } from "react-icons/hi2";
import { FaBookmark } from "react-icons/fa6";
import { Card, ListGroup } from "react-bootstrap/esm";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/actions/fecthData";
import { Link } from "react-router-dom";

function HomePageDx() {
  const endpoint = "profile";
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch("me"));
  }, []);
  return (
    <Card className="text-center position-relative">
      <Card.Header
        style={{
          height: "50px",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Il contenuto della Card.Header */}
      </Card.Header>

      <div className="pb-4">
        <Link to={"/main"}>
          <img
            src={user.image}
            alt="profile"
            width={70}
            height={70}
            className="rounded-circle object-fit-cover position-absolute top-25 start-50 translate-middle"
          />
        </Link>
      </div>
      <Card.Body>
        <Card.Title className="fs-6 mt-2">
          <Link to={"/main"} className="h6 text-decoration-none">
            <a href={endpoint} className="h6 text-decoration-none">
              {user.name}&nbsp;
              {user.surname}
            </a>
          </Link>
        </Card.Title>
        <Card.Text className="fs-7">
          {user.title} presso {user.area}
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
