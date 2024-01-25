import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MySidebar from "../components/MySidebar";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/actions/fecthData";
import MyProfile from "./MyProfile";

function MyMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch("me"));
  }, []);

  return (
    <Container className="p-0 m-0">
      <Row>
        <Col xs={8}>
          <MyProfile />
        </Col>

        <Col xs={4}>
          <MySidebar />
        </Col>
        {/* Questa sezione deve sparire quando la pagina non è lg */}
      </Row>
    </Container>
  );
}

export default MyMain;
