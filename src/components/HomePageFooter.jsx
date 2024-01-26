
/* IMPORTA COMPONENTI */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


function HomePageLeft() {
    return (

<Container className="pt-2">
  <Row>
    <Col className='mb-4 mb-md-0 d-flex flex-wrap' style={{ fontSize: '15px' }}>

        <div className="pe-3" >
          <a href='#!' className='text-secondary text-decoration-none'>
            Informazioni
          </a>
        </div>
        <div>
          <a href='#!' className='text-secondary text-decoration-none'>
            accessibilità
          </a>
        </div>
        <div>
          <a href='#!' className='text-secondary text-decoration-none pe-3'>
            centro assitenza
          </a>
        </div>
        <div>
          <a href='#!' className='text-secondary text-decoration-none'>
            Privacy e Condizioni
          </a>
        </div>

        <div>
          <a href='#!' className='text-secondary text-decoration-none'>
            Opzioni per gli annunci pubblicitari
          </a>
        </div>

        <div className="pe-3" >
          <a href='#!' className='text-secondary text-decoration-none'>
            Pubblicita
          </a>
        </div>
        <div>
          <a href='#!' className='text-secondary text-decoration-none'>
            Servizi aziende
          </a>
        </div>

        <div className="pe-3" >
          <a href='#!' className='text-secondary text-decoration-none'>
            Scarica l'app Linkedin
          </a>
        </div>
        <div>
          <a href='#!' className='text-secondary text-decoration-none'>
           Altro
          </a>
        </div>

    </Col>
  </Row>
  <div className='d-flex text-center p-3'>
  <Image src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" /> <div><p style={{ fontSize: '13px' }}>LinkedIn Corporation <span> &copy;{new Date().getFullYear()}</span></p></div>
</div>
</Container>

    );
  }
  
  export default HomePageLeft;