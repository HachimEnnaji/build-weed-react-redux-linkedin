import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";
import { fetchExpAction } from "../redux/actions/fetchEditExperience";
import { FiTrash2 } from "react-icons/fi";
import { fetchSearch } from "../redux/actions/fecthData";
import MyEditedProfile from "./MyEditedProfile";
import MyNewExperience from "./MyNewExperience";
import MyEditedExperience from "./MyEditedExperience";
import MyDeleteExperience from "./MyDeleteExperience";

function MyProfile() {
  const endpoint = "profile/";
  const link = "https://striveschool-api.herokuapp.com/api/profile/";
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user.profile);
  //   const myProfile = useSelector((state) => state.user.profile);
  const myExperience = useSelector((state) => state.user.myExperience);
  const refreshExperience = useSelector((state) => state.user.refreshExp);

  useEffect(() => {
    dispatch(fetchExpAction("65ae2255600be100183a8678"));
  }, []);

  useEffect(() => {
    dispatch(fetchExpAction("65ae2255600be100183a8678"));
  }, [refreshExperience]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  //   form edit
  const [showForm, setShowForm] = useState(false);
  const handleCloseEdit = () => setShowForm(false);
  const handleShowEdit = () => setShowForm(true);

  const [showExperience, setShowExperience] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [deleteExperience, setDeleteExperience] = useState(false);

  const [experienceData, setExperienceData] = useState(null);

  const handleExperiencePostModal = () => {
    setEditExperience(true);
  };

  const handleExperienceDeleteModal = (exp) => {
    setExperienceData(exp);
    setDeleteExperience(true);
  };
  const handleExperienceModal = (exp) => {
    setExperienceData(exp);
    setShowExperience(true);
  };

  const handleClose = () => {
    setExperienceData(null);
    setShow(false);
    setShowExperience(false);
    setDeleteExperience(false);
    setEditExperience(false);
  };

  return (
    <>
      <Row className="w-100 mt-3 ">
        <Col>
          <Card className="my-3">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="background"
              height={200}
              className="object-fit-cover "
            />
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <img
                    src={data.image}
                    alt="user"
                    width={150}
                    height={150}
                    className="rounded-circle object-fit-cover ms-3"
                    style={{ position: "absolute", top: 100, left: 0 }}
                  />
                </div>
                <div>
                  <Button className="bg-transparent text-dark rounded-circle border-0" onClick={handleShowEdit}>
                    <FaPencilAlt />
                  </Button>
                  <MyEditedProfile show={showForm} handleClose={handleCloseEdit} data={data} />
                </div>
              </div>
              <Row>
                <Col xs={9}>
                  <h3 className="text-capitalize">
                    {data.name} {data.surname}
                  </h3>
                  <p>{data.title}</p>
                  <span>{data.area}</span>
                  <Button
                    variant="primary"
                    className="border-0 bg-transparent text-primary button-hover"
                    onClick={handleShow}
                  >
                    Informazioni di contatto
                  </Button>
                  <p>{data.bio}</p>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="text-capitalize">
                        {data.name} {data.surname}
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <Container fluid className="d-flex justify-content-between">
                        <p> Informazioni di contatto</p> <FaPencilAlt />
                      </Container>
                    </Modal.Body>
                    <Container className="d-flex pb-3">
                      <img
                        src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-o354wle6.png"
                        style={{ heigth: "30px", width: "30px" }}
                        alt="logo linkedin"
                        className="img-contain"
                      />
                      <Container fluid>
                        <p className="m-0 ">Il tuo Profilo</p>
                        {/* <Link to={"/:id"} > </Link> */}
                        <a href={`${link}${data._id}`} className="link-hover">
                          {endpoint}
                          {data._id}
                        </a>
                      </Container>
                    </Container>
                    <Container className="d-flex pb-4">
                      <VscMail className="fs-2" />
                      <Container fluid>
                        <p className="m-0">Email</p>
                        {/* <Link to={"/:id"} > </Link> */}
                        <a href={`mailto:${data.email}`} className="link-hover">
                          {data.email}
                        </a>
                      </Container>
                    </Container>
                  </Modal>
                </Col>
                <Col xs={3}>
                  <Container className="d-flex align-items-center">
                    <img
                      src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg"
                      alt="epicode logo"
                      height={30}
                    />
                    <a href="https://epicode.com" className="link-hover">
                      <h6 className="text-black  m-0 hover">EPICODE</h6>
                    </a>
                  </Container>
                </Col>
              </Row>
              <Button variant="primary" className="me-2 rounded-pill">
                Disponibile per
              </Button>
              <Button variant="light" className="me-2 rounded-pill border border-2 border-primary text-primary">
                Aggiungi sezione del profilo
              </Button>
              <Button variant="light" className="me-2 rounded-pill border border-2 border-dark">
                Altro
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* sezione esperienze */}
      <Row className="w-100 mt-3 mb-5">
        <Col>
          <Card className="rounded rounded-3">
            <Card.Body className="pb-0">
              <Row>
                <Col className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between w-100">
                    <h3 className=" h5">Esperienza</h3>
                    {/* <i className=" icon-post bi bi-plus-lg fs-4" onClick={handleExperiencePostModal}></i> */}
                    {/* <FaPencilAlt  onClick={handleExperiencePostModal}/> */}
                    <FiPlus onClick={handleExperiencePostModal} />
                  </div>
                </Col>
              </Row>
              <MyEditedExperience show={editExperience} handleClose={handleClose} />
              <Row>
                <Col>
                  {myExperience &&
                    myExperience.map((exp) => (
                      <Row className="mt-2" key={exp._id}>
                        <Col className=" col-auto">
                          <div className="d-flex flex-column align-items-center justify-content-center">
                            <img
                              src="https://cdn.icon-icons.com/icons2/1377/PNG/512/imagexgeneric_92742.png"
                              alt=""
                              className=" fix-h-60"
                              style={{ heigth: "30px", width: "30px" }}
                            />
                            {/* <i
                              className="icon-edit bi bi-pencil-square text-gray fs-5 mt-1"
                              onClick={() => handleExperienceModal(exp)}
                            ></i> */}
                            <FaPencilAlt onClick={() => handleExperienceModal(exp)} />

                            {/* <i
                              className="icon-delete bi bi-x-square text-gray fs-5"
                              onClick={() => handleExperienceDeleteModal(exp)}
                            ></i> */}

                            <FiTrash2 onClick={() => handleExperienceDeleteModal(exp)} />
                          </div>
                        </Col>
                        <Col className="ps-0 pe-2">
                          <p className="fw-semibold pt-2 mb-0">{exp.role}</p>
                          <p className="small mb-0">{exp.company}</p>
                          <p className="text-gray small mb-0">
                            {new Date(exp.startDate).getFullYear() +
                              " - " +
                              (exp.endDate ? new Date(exp.endDate).getFullYear() : "Presente")}
                          </p>
                          <p className="text-gray small  mb-0">{exp.area}</p>
                          <p className="small mt-2">{exp.description}</p>
                        </Col>
                        <hr className="text-gray my-0" />
                      </Row>
                    ))}
                </Col>
              </Row>
              {experienceData && (
                <MyDeleteExperience expData={experienceData} show={deleteExperience} handleClose={handleClose} />
              )}
              {experienceData && (
                <MyNewExperience expData={experienceData} show={showExperience} handleClose={handleClose} />
              )}
              <hr className="text-gray my-0" />
              {/* <Row className="border-top-5 border-black  hover-gray">
                <Col xs={12} className="p-0 m-0 ">
                  <div className=" text-center py-2">
                    <p className="d-inline">Mostra tutte le esperienze </p>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Col>
              </Row> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MyProfile;
