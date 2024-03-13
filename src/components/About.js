import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={5}>
            <img src="/images/about_new.png" />
          </Col>
          <Col className="d-flex flex-column justify-content-center" md={5}>
            <h2>About Us</h2>
            <div className="divider my-3"></div>
            <p>
              Welcome to [Your Restaurant Name], where passion meets flavor.
              Nestled in the heart of [Your City], our restaurant offers a
              culinary journey like no other. With a commitment to quality
              ingredients, innovative recipes, and exceptional service, we
              strive to create memorable dining experiences for every guest.
            </p>
            <p>
              Our cozy yet elegant ambiance provides the perfect setting for
              intimate dinners, family gatherings, and celebrations. Whether
              you're craving classic comfort food or daring culinary creations,
              our diverse menu caters to every palate.
            </p>
            <div>
              <Button className="btn-brand mt-2">Explore Menu</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
