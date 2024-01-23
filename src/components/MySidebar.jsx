import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/actions/fecthData";

function MySidebar() {
  const profileObj = useSelector((state) => state.user.content);
  const dispatch = useDispatch();
  const [visibleProfiles, setVisibleProfiles] = useState(5);

  const handleFetchProfiles = async () => {
    try {
      await dispatch(fetchSearch("?"));
      //   setProfiles(profileObj);
      //   console.log(profileObj);
    } catch (error) {
      console.error("Errore durante la fetch:", error.message);
    }
  };
  const handleMore = () => {
    setVisibleProfiles(visibleProfiles + 5);
  };

  useEffect(() => {
    handleFetchProfiles();
  }, [dispatch]);

  return (
    <Col xs={3}>
      <Col>
        <Card className="my-3" style={{ width: "18rem" }}>
          <Card.Body className="p-2">
            <Card.Header className="bg-transparent d-flex justify-content-between">
              <div>
                <Card.Title className="h5">Lingua del profilo</Card.Title>
                <Card.Subtitle className="my-2 text-muted h6">Italiano</Card.Subtitle>
              </div>
              <div className="d-flex justify-content-end align-items-start border-0">
                <Button className="bg-transparent text-dark d-flex justify-content-end align-items-end p-0 border-0">
                  <FaPencilAlt />
                </Button>
              </div>
            </Card.Header>

            <Card.Footer className="bg-transparent d-flex justify-content-between">
              <div>
                <Card.Title className="h5">Public profile & URL</Card.Title>
                <Card.Subtitle className="my-2 text-muted h6">url-profilo</Card.Subtitle>
              </div>
              <div className="d-flex justify-content-end align-items-start border-0">
                <Button className="bg-transparent text-dark d-flex justify-content-end align-items-end p-0 border-0">
                  <FaPencilAlt />
                </Button>
              </div>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: "18rem", height: "16rem" }}>{/*CARD IMAGE */}</Card>
      </Col>

      <Col>
        <Card className="my-3" style={{ width: "18rem" }}>
          <Card.Header className="bg-transparent border-0">
            <div className=" p-2 ">
              <Card.Title className="h6 font-weight-bold">Persone che potresti conoscere</Card.Title>
              <Card.Subtitle className=" text-muted">Dalla tua scuola o Università</Card.Subtitle>
            </div>
          </Card.Header>
          {profileObj.map(
            (profile, index) =>
              index < visibleProfiles && (
                <Card.Body key={profile._id}>
                  <Container className=" p-2 ">
                    <Row className="d-flex flex-column ">
                      <Col className="">
                        <Col className=" d-flex">
                          <div>
                            <Image src={profile.image} height={35} width={35} className="me-2" roundedCircle />
                          </div>
                          <div>
                            <div>
                              <Card.Title className="d-flex h6 text-capitalized">
                                {profile.name} {profile.surname}
                              </Card.Title>
                              <Card.Subtitle className="my-2 text-muted h6">
                                {profile.title ? profile.title : "Nessun titolo"}
                              </Card.Subtitle>
                              <div>
                                <Button variant="outline-secondary" size="sm">
                                  <HiUserAdd />
                                  Collegati
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              )
          )}
          {visibleProfiles < profileObj.length && (
            <Card.Footer className="bg-gray">
              <div className=" d-flex justify-content-center">
                <Button className="border-0 bg-transparent text-secondary" size="sm" onClick={handleMore}>
                  Mostra altro
                </Button>{" "}
              </div>
            </Card.Footer>
          )}
        </Card>
      </Col>
    </Col>
  );
}

export default MySidebar;
