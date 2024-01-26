function NotFound() {
  return (
    <Jumbotron
      fluid
      className="text-center"
      style={{
        backgroundImage: 'url("https://real-web.it/wp-content/uploads/2020/07/not-found-2384304_1280.jpg")',
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Container>
        <h1>Titolo del Jumbotron</h1>
        <p>Sottotitolo o descrizione</p>
        <Link to="/" className="btn btn-primary">
          Torna alla Home
        </Link>
      </Container>
    </Jumbotron>
  );
}
export default NotFound;
