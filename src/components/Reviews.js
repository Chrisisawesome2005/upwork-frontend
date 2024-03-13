import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Title from "./Title";

const Reviews = () => {
  const reviews = [
    {
      name: "John Smith",
      review:
        "Absolutely fantastic experience! The food was delicious, the service was impeccable, and the ambiance was delightful. I highly recommend this restaurant to anyone looking for a memorable dining experience.",
      img: "avatar_01",
    },
    {
      name: "Emily Johnson",
      review:
        "I had the pleasure of dining at this restaurant last night, and it exceeded all my expectations. The flavors were outstanding, and each dish was beautifully presented. The staff was friendly and attentive, making it a truly enjoyable evening.",
      img: "avatar_02",
    },
    {
      name: "Michael Davis",
      review:
        "This restaurant is a gem! From the moment we walked in, we were greeted with warmth and hospitality. The food was exquisite, with a perfect balance of flavors and textures. I can't wait to return and try more dishes from their menu.",
      img: "avatar_03",
    },
  ];

  return (
    <section id="review">
      <Container>
        <Title name={"REVIEWS"} text={"What our Clients has to Say"} />
        <Row>
          <Col lg={8} className="mx-auto">
            <Carousel>
              {reviews.map((review) => {
                return (
                  <Carousel.Item interval={3000}>
                    <div className="review p-3 d-flex text-center flex-column justify-content-center align-items-center ">
                      <div className="quotes ">
                        <i class="ri-double-quotes-l"></i>
                      </div>

                      <p>{review.review}</p>
                      <img src={`/images/${review.img}.jpg`} />
                      <h3>{review.name}</h3>
                      <div className="stars">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
