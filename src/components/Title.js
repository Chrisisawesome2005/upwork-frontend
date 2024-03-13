import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Title = ({ name, text }) => {
  return (
    <Row id="title" className="my-5">
      <Col lg={8} className="mx-auto text-center">
        <h2>{name}</h2>
        <div className="divider my-3 mx-auto"></div>
        <p>{text}</p>
      </Col>
    </Row>
  );
};

export default Title;
