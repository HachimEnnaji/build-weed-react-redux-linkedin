/* IMPORTA COMPONENTI */
import { useEffect } from "react";
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
<<<<<<< HEAD
import { FaSearch } from "react-icons/fa";
=======
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchJobs } from "../redux/actions/fetchJobs";
import { parseISO, formatDistanceToNow } from "date-fns";
>>>>>>> 42d3ed107bc2d61c4a174a85a9a871a8b7c07f73

function WorkPageCentral() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.list.data);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(fetchJobs(params.category, params.query));
  }, [params.category, params.query]);
  return (
<<<<<<< HEAD
    <Col>
      <Col>
        <Card className="p-1 d-flex justify-content-center">
          <div>
            <h4>Ricerche di offerte di lavoro suggerite</h4>
          </div>
          <div
            className="mb-4 mb-md-0 d-flex flex-wrap"
            style={{ fontSize: "15px" }}
          >
            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> remote
              </Button>{" "}
            </div>
=======
    <Container className="pt-2">
      <Row>
        <Col>
          <Col>
            <Card>
              <div>
                <h3>Ricerche di offerte di lavoro suggerite</h3>
              </div>
              <div className="mb-4 mb-md-0 d-flex flex-wrap" style={{ fontSize: "15px" }}>
                <div className="m-1">
                  <Button variant="outline-primary">remote</Button>{" "}
                </div>
                <div className="m-1">
                  <Button variant="outline-primary">Marketing manager</Button>{" "}
                </div>
                <div className="m-1">
                  <Button variant="outline-primary">hr</Button>{" "}
                </div>
                <div className="m-1">
                  <Button variant="outline-primary">legal</Button>{" "}
                </div>
>>>>>>> 42d3ed107bc2d61c4a174a85a9a871a8b7c07f73

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> Marketing manager
              </Button>{" "}
            </div>

            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> hr
              </Button>{" "}
            </div>

<<<<<<< HEAD
            <div className="m-1">
              <Button
                className="rounded-pill"
                size="sm"
                variant="outline-primary"
              >
                {" "}
                <FaSearch /> legal
              </Button>{" "}
            </div>

                <div>
                  <Button variant="outline-primary">sales</Button>{" "}
                </div>

                <div className="pe-3">
                  <Button variant="outline-primary">amazon</Button>{" "}
                </div>
                <div>
                  <Button variant="outline-primary">google</Button>{" "}
                </div>
              </div>
            </Card>
          </Col>

      <Col>
        <Card className="my-3">
          <Card.Header>
            <div className=" p-2 ">
              <Card.Title className="h6 font-weight-bold">
                Titolo sezione
              </Card.Title>
              <Card.Subtitle className=" text-muted">
                Sulla base del tuo profilo e della tua cronologia delle ricerche
              </Card.Subtitle>
            </div>
          </Card.Header>

          <Card.Body>
            <Container className=" p-2 ">
              <Row className="d-flex flex-column">
                <Col className="">
                  <Col className=" d-flex">
                    <div>
                      <Image rounded Circle src="/" />
                    </div>

                    <div>

                      <Card.Title className="d-flex h6 text-capitalized">
                        Titolo lavoro
                      </Card.Title>

                      <Card.Subtitle className="my-2 text-muted h6">
                        Dati Azienda
                      </Card.Subtitle>

                      <Card.Text className="d-flex align-items-baseline h6">
                        
                        <p className="me-1">data annuncio</p>
                        <p>candidati</p>
                  
                        <div className="d-flex align-items-cente mx-3 ">
                          {" "}
                          <FaLinkedin />  candidatura semplice
                        </div>
                      </Card.Text>

                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </Card.Body>

          <Card.Footer className="bg-gray">
                        
                        <div className=" d-flex justify-content-center">
                          <Button
                            className="border-0 bg-transparent text-secondary"
                            size="sm"
                          >
                            Mostra altro
                          </Button>{" "}

                        </div>

                      </Card.Footer>
        </Card>
      </Col>
    </Col>
=======
          <Col>
            <Card className="my-3">
              <Card.Header>
                <div className=" p-2 ">
                  <Card.Title className="h6 font-weight-bold">Consigliato per te</Card.Title>
                  <Card.Subtitle className=" text-muted">
                    Sulla base del tuo profilo e della tua cronologia delle ricerche
                  </Card.Subtitle>
                </div>
              </Card.Header>
              {jobs &&
                jobs.map((job) => (
                  <Card key={job._id}>
                    <Card.Body>
                      <Container className=" p-2 ">
                        <Row className="d-flex flex-column">
                          <Col className="">
                            <Col className=" d-flex">
                              <div>
                                <Image
                                  rounded
                                  Circle
                                  height={50}
                                  width={50}
                                  src="https://cdn.icon-icons.com/icons2/1377/PNG/512/imagexgeneric_92742.png"
                                />
                              </div>
                              <div>
                                <div>
                                  <Card.Title className="d-flex h6 text-capitalized">{job.title}</Card.Title>
                                  <Card.Subtitle className="my-2 text-muted h6">{job.company_name}</Card.Subtitle>
                                  <Card.Text className="d-flex text-muted h6">
                                    <p>{formatDistanceToNow(parseISO(job.publication_date))}</p>
                                    <p>candidati</p>
                                    <div className="d-flex">
                                      {" "}
                                      <FaLinkedin /> candidatura semplice
                                    </div>
                                  </Card.Text>
                                </div>
                                <Card.Footer className="bg-gray">
                                  <div className=" d-flex justify-content-center">
                                    <Button className="border-0 bg-transparent text-secondary" size="sm">
                                      <FaLinkedin /> candidatura semplice
                                    </Button>{" "}
                                  </div>
                                </Card.Footer>
                              </div>
                            </Col>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                ))}
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
>>>>>>> 42d3ed107bc2d61c4a174a85a9a871a8b7c07f73
  );
}

export default WorkPageCentral;
