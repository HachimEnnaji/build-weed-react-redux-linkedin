import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { parseISO, formatDistanceToNow } from "date-fns";
import HomePageModalOne from "./HomePageModalOne";
import HomePageModalTwo from "./HomePageModalTwo";
import HomePageModalZero from "./HomePageModalZero";
import { fetchHomeAction } from "../redux/actions/fetchEditHomepage";
import { fetchSearch } from "../redux/actions/fecthData";
import { AiOutlineLike } from "react-icons/ai";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import HomeDeleteModal from "./HomeDeleteModal";
import { Link } from "react-router-dom";
import HomePutModal from "./HomePutModal";
import { BiRepost } from "react-icons/bi";
import HomePageModalThree from "./HomePageModalThree";

function HomePageCentral() {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.user.profile);
  const allPost = useSelector((state) => state.home.allPost);
  const refreshPost = useSelector((state) => state.home.refreshPost);

  // const [searchBarValue, setSearchBarValue] = useState("");

  const [showHomeDeleteModal, setShowHomeDeleteModal] = useState(false);
  const [showHomePutModal, setShowHomePutModal] = useState(false);

  const [selectedPostData, setSelectedPostData] = useState(null);

  const [fetchTimer, setFetchTimer] = useState(null);

  useEffect(() => {
    dispatch(fetchSearch("me"));

    setFetchTimer(
      setInterval(() => {
        dispatch(fetchHomeAction());
      }, 20000)
    );
  }, []);

  useEffect(() => {
    dispatch(fetchHomeAction());
  }, [refreshPost]);

  const handleHomeDeleteModal = (post) => {
    setSelectedPostData(post);
    setShowHomeDeleteModal(true);
  };
  const handleHomePutModal = (post) => {
    setSelectedPostData(post);
    setShowHomePutModal(true);
  };

  const handleClose = () => {
    setSelectedPostData(null);
    setShowHomeDeleteModal(false);
    setShowHomePutModal(false);
  };
  return (
    <>
      {selectedPostData && (
        <HomeDeleteModal postData={selectedPostData} show={showHomeDeleteModal} handleClose={handleClose} />
      )}
      {selectedPostData && (
        <HomePutModal postData={selectedPostData} show={showHomePutModal} handleClose={handleClose} />
      )}
      <Card>
        <Card.Body>
          <HomePageModalZero />
          <div className="d-flex align-items-center justify-content-between">
            {selectedPostData && (
              <HomeDeleteModal postData={selectedPostData} show={showHomeDeleteModal} handleClose={handleClose} />
            )}
            <HomePageModalOne />
            <HomePageModalTwo />
            <HomePageModalThree />
          </div>
        </Card.Body>
      </Card>
      <Row className="d-flex flex-column align-items-center">
        {allPost && allPost.length > 0 ? (
          <Container fluid className="mt-3">
            {allPost.slice(0, 20).map((post) => (
              <Col xs={12} className=" mb-3" key={post._id}>
                <Card className="rounded rounded-3">
                  <Card.Body className="pb-0">
                    {/* post: intestazione */}
                    <Row className="mb-2 ">
                      <Col className=" col-auto p-0 ps-2 ">
                        <div>
                          <Image
                            src={post.user.image}
                            roundedCircle
                            className="object-fit-cover border border-2 border-white"
                            style={{ height: "48px", width: "48px" }}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="px-1">
                          <p className="fw-semibold fs-5 m-0">{post.user.username}</p>
                          <p className="text-gray fs-6 m-0">{post.user.title}</p>

                          <p className="text-muted fs-7 m-0">
                            {formatDistanceToNow(parseISO(post.user.createdAt))} ago
                          </p>
                        </div>
                      </Col>
                      <Col xs={2}>
                        {myProfile._id == post.user._id ? (
                          <div className=" d-flex flex-column justify-content-center align-items-center">
                            <FiEdit2 onClick={() => handleHomePutModal(post)} size={20} className="hover-icon m-2" />

                            <FiTrash2
                              onClick={() => handleHomeDeleteModal(post)}
                              size={20}
                              className="trash-icon m-2"
                            />
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </Col>
                    </Row>
                    {/* post: corpo */}
                    <Row>
                      <Col xs={12}>
                        <div className="d-flex flex-column ps-3 pb-2">
                          <p className="fs-5 ms-5">{post.text}</p>
                          {post.image ? (
                            <img
                              src={post.image}
                              alt="post"
                              height={400}
                              width={550}
                              className="object-fit-cover mb-2"
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </Col>
                    </Row>
                    {/* --- */}
                    <hr className="text-gray my-0" />
                    <Row>
                      <Col xs={12} className="p-0 m-0 my-2 ">
                        <Link to={"/"} className=" text-decoration-none text-black">
                          <Row>
                            <Col xs={3}>
                              <div className="d-flex justify-content-center align-items-center bg-white text-black border-0 hoverDiv btn btn-primary">
                                <AiOutlineLike size={25} className="me-1" />
                                <span className="fs-7 text-gray fw-semibold">Consiglia</span>
                              </div>
                            </Col>
                            <Col xs={3}>
                              <div className="d-flex justify-content-center align-items-center bg-white text-black border-0 hoverDiv btn btn-primary">
                                <TfiCommentAlt size={25} className="me-1" />
                                <span className="fs-7 text-gray fw-semibold">Commenta</span>
                              </div>
                            </Col>
                            <Col xs={3}>
                              <div className="d-flex justify-content-center align-items-center hbg-white text-black border-0 hoverDiv btn btn-primaryr">
                                <BiRepost size={25} className="me-1" />
                                <span className="fs-7 text-gray fw-semibold">Diffondi il post</span>
                              </div>
                            </Col>
                            <Col xs={3}>
                              <div className="d-flex justify-content-center align-items-center hbg-white text-black border-0 hoverDiv btn btn-primaryr">
                                <IoIosSend size={25} className="me-1" />
                                <span className="fs-7 text-gray fw-semibold">Invia</span>
                              </div>
                            </Col>
                          </Row>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Container>
        ) : (
          <>
            <h3 className="text-center">Nessun post disponibile</h3>

            <img
              height={600}
              src="https://static.vecteezy.com/system/resources/previews/005/006/031/original/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
              alt="no post found"
            />
          </>
        )}
      </Row>
    </>
  );
}

export default HomePageCentral;
