import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsCalendar3 } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostHomeAction } from "../redux/actions/fetchEditHomepage";
import { Link } from "react-router-dom";

function HomePageModalZero() {
  const data = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddPost = (e) => {
    e.preventDefault();

    if (searchBarValue != "") {
      const objectToPost = {
        text: searchBarValue,
      };

      dispatch(fetchPostHomeAction(objectToPost));
      setSearchBarValue("");
      handleClose();
    }
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <Link to={"/main"}>
        <img src={data.image} alt="profile" width={50} height={50} className="rounded-circle object-fit-cover me-2" />
      </Link>

      <div className="flex-grow-2 ">
        <Button
          variant="light"
          className="text-start me-2 rounded-pill border border-1 border-dark w-100"
          style={{ height: "50px" }}
          onClick={handleShow}
        >
          Avvia un post
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="d-flex align-items-center hoverDiv p-2 rounded-2">
                <div>
                  <img
                    src={data.image}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-circle object-fit-cover me-2"
                  />
                </div>
                <div>
                  <h5 className="text-capitalized">
                    {data.name} {data.surname}
                  </h5>
                  <p className="fs-7 m-0">Pubblica: Chiunque</p>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddPost}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  className="border-0"
                  as="textarea"
                  placeholder="Di cosa vorresti parlare?"
                  rows={3}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                />
              </Form.Group>
              <Button className="border-0  bg-transparent  text-black ms-2 mb-2">
                <CiFaceSmile className="hoverDiv rounded-circle" />
              </Button>
              <div>
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <HiOutlinePhoto className="mb-1 fs-5" />
                </Button>
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <BsCalendar3 className="mb-1 fs-5" />
                </Button>
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <TiStarburst className="mb-1 fs-5" />
                </Button>
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <HiOutlineDotsHorizontal className="mb-1 fs-5" />
                </Button>
              </div>
              <Container className="d-flex justify-content-end">
                {/* <Button variant="secondary" onClick={handleClose}>
                  Annulla
                </Button> */}
                <Button
                  className={`${searchBarValue === "" ? "disabled-post" : ""} rounded-pill`}
                  variant="primary"
                  type="submit"
                  disabled={searchBarValue === ""}
                >
                  Pubblica
                </Button>
              </Container>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default HomePageModalZero;
