import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const InstaPost = () => {
  return (
    <section>
      <Row className="w-100 g-0">
        <Col lg={3} sm={6} className="insta-post">
          <img src="/images/insta_post01.jpg" />

          <a href="#">
            {" "}
            <i class="ri-instagram-fill"></i>
          </a>
        </Col>
        <Col lg={3} sm={6} className="insta-post">
          <img src="/images/insta_post02.jpg" />
          <a href="#">
            {" "}
            <i class="ri-instagram-fill"></i>
          </a>
        </Col>
        <Col lg={3} sm={6} className="insta-post">
          <img src="/images/insta_post03.jpg" />
          <a href="#">
            {" "}
            <i class="ri-instagram-fill"></i>
          </a>
        </Col>
        <Col lg={3} sm={6} className="insta-post">
          <img src="/images/insta_post04.jpg" />
          <a href="#">
            {" "}
            <i class="ri-instagram-fill"></i>
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default InstaPost;
