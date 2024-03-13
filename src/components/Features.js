import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const Features = () => {
  const features = [
    {
      name: "Free Wifi",
      description:
        "Stay connected with complimentary high-speed Wi-Fi throughout our restaurant. Whether you're catching up on emails or sharing your dining experience on social media, we've got you covered.",
      icon: "ri-wifi-fill",
    },
    {
      name: "Outdoor Seating",
      description:
        "Enjoy the fresh air and beautiful weather while dining in our outdoor seating area. Perfect for those who prefer al fresco dining or simply want to soak up some sunshine.",
      icon: "ri-sun-line",
    },
    {
      name: "Live Music",
      description:
        "Enhance your dining experience with live music performances. From soothing jazz to lively acoustic sets, our talented musicians create the perfect ambiance for your enjoyment.",
      icon: "ri-music-line",
    },
    {
      name: "Private Dining",
      description:
        "Host your special events and gatherings in our private dining area. Whether it's a birthday celebration, business meeting, or intimate dinner party, our dedicated space ensures privacy and comfort.",
      icon: "ri-bank-line",
    },
  ];

  return (
    <section id="features">
      <Container>
        <Title name={"FEATURES"} text={"What We Offer"} />
        <Row>
          {features.map((feature) => {
            return (
              <Col lg={3} sm={6} className="d-flex">
                <div className="feature text-center p-4">
                  <div className="icon d-flex justify-content-center">
                    <i class={`${feature.icon}`}></i>
                  </div>

                  <h4 className="text-white my-2">{feature.name}</h4>
                  <p className="text-white">{feature.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
