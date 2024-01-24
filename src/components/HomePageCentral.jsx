import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsCalendar3 } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import HomePageModalOne from "./HomePageModalOne";
import HomePageModalTwo from "./HomePageModalTwo";
import HomePageModalZero from "./HomePageModalZero";

function HomePageCentral() {
  return (
    <Card>
      <Card.Body>
        <HomePageModalZero />
        <div className="d-flex align-items-center">
          <HomePageModalOne />
          <HomePageModalTwo />
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomePageCentral;
