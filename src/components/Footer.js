import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="text-white">
        <Row className="justify-content-between">
          <Col lg={4} sm={6}>
            <h1 className="diaplay-1 text-white">BOOST-IFY</h1>
            <p>Serving Delights That Elevate Your Dining Experience</p>
          </Col>
          <Col className="ms-auto" lg={3} sm={6}>
            <h3 className="text-white">Contact</h3>
            <ul className="list-unstyled">
              <li>Call: 083 858 8494</li>
              <li>Email: boost@gmail.com</li>
              <li>City: Vanderbijlpark</li>
              <li>Address: 15 Darbez Street</li>
            </ul>
          </Col>
          <Col lg={3} sm={6}>
            <h3 className="text-white">Opening Hours</h3>
            <ul className="list-unstyled">
              <li>MON-FRI: 8am-10pm</li>
              <li>SAT-SUN: 8am-8pm</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
