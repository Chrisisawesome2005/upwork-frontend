import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Title from "./Title";

const Reservation = () => {
  return (
    <section id="reservation">
      <Container className="">
        <Title name={"RESERVATION"} text={"Book Your Table"} />
        <Row>
          <Col lg={8} className="mx-auto">
            <Row className="g-3">
              <Col md={6}>
                <Form.Control type="text" placeholder="Name" />
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Surname" />
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Date" />
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Time" />
              </Col>
              <Col sm={12}>
                <Form.Control as="textarea" rows={5} placeholder="Message" />
              </Col>
              <Col sm={12}>
                <Button className="btn-brand w-100">Send</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reservation;
