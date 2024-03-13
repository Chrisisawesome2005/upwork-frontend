import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

function Menu() {
  const menuItems = [
    {
      name: "500g Ribs",
      description:
        "Delicious and tender pork ribs, marinated and ready for grilling or roasting. Perfect for barbecue gatherings or family dinners.",
      price: "$9.99",
      img: "item_1",
    },
    {
      name: "Assorted Sushi Platter",
      description:
        "A delightful assortment of fresh sushi rolls including California rolls, tuna rolls, and salmon nigiri. Ideal for sushi lovers or party appetizers.",
      price: "$15.99",
      img: "item_2",
    },
    {
      name: "Vegetarian Pizza",
      description:
        "A mouthwatering pizza loaded with fresh vegetables including bell peppers, mushrooms, onions, and olives. Perfect for vegetarians or anyone craving a flavorful pizza.",
      price: "$12.49",
      img: "item_3",
    },
    {
      name: "Grilled Salmon Fillet",
      description:
        "A succulent grilled salmon fillet seasoned with herbs and lemon, served with a side of roasted vegetables. A healthy and delicious option for seafood enthusiasts.",
      price: "$14.99",
      img: "item_4",
    },
    {
      name: "Classic Cheeseburger",
      description:
        "A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, and pickles, served on a toasted sesame seed bun. A timeless favorite for burger enthusiasts.",
      price: "$8.99",
      img: "item_5",
    },
    {
      name: "Mango Tango Smoothie",
      description:
        "A refreshing blend of ripe mangoes, Greek yogurt, and honey, garnished with fresh mint leaves. A tropical treat to cool down on a hot day.",
      price: "$6.49",
      img: "item_6",
    },
    {
      name: "Chicken Caesar Salad",
      description:
        "Crisp romaine lettuce topped with grilled chicken breast, Parmesan cheese, croutons, and Caesar dressing. A classic salad choice for a light and satisfying meal.",
      price: "$10.99",
      img: "item_7",
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "A decadent chocolate cake with a gooey molten center, served warm and topped with a scoop of vanilla ice cream. The ultimate indulgence for chocolate lovers.",
      price: "$7.99",
      img: "item_8",
    },
  ];

  return (
    <section id="menu" className="bg-light">
      <Container>
        <Title name={"MENU"} text={"Check Our Menu"} />
        <Row>
          <Col className="mx-auto" md={12}>
            <Tabs
              defaultActiveKey="All"
              id="uncontrolled-tab-example"
              className="mb-3 d-flex justify-content-center"
            >
              <Tab eventKey="All" title="All">
                <Container>
                  <Row>
                    {menuItems.map((menuItem) => {
                      return (
                        <Col lg={3} sm={6} className="d-flex">
                          <div className="menu-item card-effect p-4">
                            <img src={`/images/${menuItem.img}.jpg`} />
                            <div className="stars">
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                            </div>
                            <div className="menu-content">
                              <h4>{menuItem.name}</h4>
                              <small>{menuItem.price}</small>
                              <p>{menuItem.description}</p>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="Breakfast" title="Breakfast">
                Breakfast
              </Tab>
              <Tab eventKey="Lunch" title="Lunch">
                Lunch
              </Tab>
              <Tab eventKey="Dinner" title="Dinner">
                Dinner
              </Tab>
              <Tab eventKey="Dessert" title="Dessert">
                Dessert
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Menu;
