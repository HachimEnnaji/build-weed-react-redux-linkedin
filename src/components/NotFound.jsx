import React, { useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <Alert
      fluid
      className="text-center "
      style={{
        backgroundImage: 'url("https://real-web.it/wp-content/uploads/2020/07/not-found-2384304_1280.jpg")',
        backgroundSize: "cover",
        color: "white",
        height: "500px",
      }}
    >
      <Container>
        <h1>404</h1>
        <h4>La pagina a cui cerchi di accedere non è presente</h4>
        <Link to="/" className="btn btn-light border-dark my-5">
          Torna alla Home
        </Link>
        <h5 className="text-dark">Verrai reindirizzato alla HomePage a breve...</h5>
      </Container>
    </Alert>
  );
}
export default NotFound;
