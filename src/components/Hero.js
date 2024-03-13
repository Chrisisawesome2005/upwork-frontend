import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <Carousel id="hero">
      <Carousel.Item className="slide-1" interval={1000}>
        <Container className="d-flex align-items-center justify-content-center text-center hero-item dvh-100">
          <Row>
            <Col lg={8} className="mx-auto">
              <h4>WELCOME TO BOOSTIFY</h4>
              <h1 className="display-1">Juicy & Tender Steak</h1>
              <Button className="btn-brand">Reservation</Button>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="slide-2" interval={1000}>
        <Container className="d-flex align-items-center justify-content-center text-center hero-item dvh-100">
          <Row>
            <Col lg={8} className="mx-auto">
              <h4>WELCOME TO BOOSTIFY</h4>
              <h1 className="display-1">Sizzling Seafood Platter</h1>
              <Button className="btn-brand">Reservation</Button>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="slide-3" interval={1000}>
        <Container className="d-flex align-items-center justify-content-center text-center hero-item dvh-100">
          <Row>
            <Col lg={9} className="mx-auto">
              <h4>WELCOME TO BOOSTIFY</h4>
              <h1 className="display-1">Crispy Chicken Wings</h1>
              <Button className="btn-brand">Reservation</Button>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
