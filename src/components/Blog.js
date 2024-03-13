import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const Blog = () => {
  const blogPosts = [
    {
      name: "The Art of Grilling: Mastering Beef in 2022",
      description:
        "Unlock the secrets to perfectly grilled beef in 2022 with our expert tips and techniques. From selecting the best cuts to mastering the grill, this guide will elevate your grilling game to the next level.",
      img: "insta_post01",
    },
    {
      name: "Exploring Exotic Flavors: A Journey through Asian Cuisine",
      description:
        "Embark on a culinary adventure as we delve into the vibrant and diverse world of Asian cuisine. From spicy curries to savory stir-fries, discover the rich flavors and cultural influences that make Asian food so irresistible.",
      img: "insta_post02",
    },
    {
      name: "The Rise of Plant-Based Dining: Embracing Vegan and Vegetarian Options",
      description:
        "With an increasing demand for plant-based alternatives, explore the growing trend of vegan and vegetarian dining options. Learn how restaurants are adapting to cater to diverse dietary preferences and discover delicious meat-free dishes that even carnivores will love.",
      img: "insta_post03",
    },
    {
      name: "Elevating Desserts: From Classic Creations to Modern Masterpieces",
      description:
        "Indulge your sweet tooth with a journey through the world of desserts. From timeless classics like chocolate lava cake to innovative creations like liquid nitrogen ice cream, discover the artistry and decadence of dessert-making.",
      img: "insta_post04",
    },
  ];

  return (
    <section id="blog">
      <Container>
        <Title name={"BLOG"} text={"News From The Blog"} />
        <Row>
          {blogPosts.map((blogPost) => {
            return (
              <Col lg={3} sm={6} className="d-flex">
                <div className="blog-post card-effect pb-0 ">
                  <img src={`/images/${blogPost.img}.jpg`} />

                  <h4>
                    <a href="#">{blogPost.name}</a>
                  </h4>
                  <p>{blogPost.description}</p>

                  <a href="#">Read More</a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
