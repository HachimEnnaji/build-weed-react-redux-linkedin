//     <>
//       <MyProfile />
//     </>

import React, { useEffect } from "react";
import logo from "../LinkedIn_icon.svg.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import MySidebar from "../components/MySidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/actions/fecthData";
import MyProfile from "./MyProfile";

function MyMain() {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetch = async () => {
      await dispatch(fetchSearch("me"));
    };

    handleFetch();
  }, [dispatch]);

  console.log(data);

  return (
    <Container>
      <Row>
        <MyProfile />
        <Col xs={3}>
          {" "}
          <MySidebar />{" "}
        </Col>{" "}
        {/* Questa sezione deve sparire quando la magina non è lg */}
      </Row>
    </Container>
  );
}

export default MyMain;
