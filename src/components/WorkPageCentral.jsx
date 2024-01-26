/* IMPORTA COMPONENTI */
import { useEffect } from "react";
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchJobs } from "../redux/actions/fetchJobs";
import { parseISO, formatDistanceToNow } from "date-fns";

function WorkPageCentral() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.list.data);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(fetchJobs(params.category, params.query));
  }, [params.category, params.query]);
  return (
    <Container>
      <Row className="p-1">
        <Col>
          <Col>
            <Card className="p-2">
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

                <div className="m-1">
                  <Button variant="outline-primary">sales</Button>{" "}
                </div>

                <div className="m-1">
                  <Button variant="outline-primary">amazon</Button>{" "}
                </div>
              </div>
            </Card>
          </Col>

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
                              <div className="px-2">
                                <div>
                                  <Card.Title className="d-flex h4 text-capitalized">{job.title}</Card.Title>
                                  <Card.Subtitle className="my-2 text-muted h5">{job.company_name}</Card.Subtitle>
                                  <Card.Text className="d-flex text-muted h6">
                                    <p>{formatDistanceToNow(parseISO(job.publication_date))} ago</p>
                                  </Card.Text>
                                </div>
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
  );
}

export default WorkPageCentral;
