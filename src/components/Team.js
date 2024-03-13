import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const Team = () => {
  const teamMembers = [
    {
      name: "Chris Badenhorst",
      role: "Main Chef",
      img: "team_01",
    },
    {
      name: "Emily Smith",
      role: "Sous Chef",
      img: "team_02",
    },
    {
      name: "Michael Johnson",
      role: "Pastry Chef",
      img: "team_03",
    },
  ];

  return (
    <section id="team">
      <Container>
        <Title name={"TEAM"} text={"Meet Our Team Members"} />
        <Row>
          {teamMembers.map((teamMember, index) => {
            return (
              <Col key={index} lg={4} sm={6}>
                <div className="team-member card-effect text-center p-4">
                  <img src={`/images/${teamMember.img}.png`} />
                  <h4 className="mt-2">{teamMember.name}</h4>
                  <p>{teamMember.role}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
