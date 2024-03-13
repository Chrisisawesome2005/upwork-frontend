import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function Navigation() {
  const [activeLink, setActiveLink] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 110) {
        setActiveLink("hero");
      } else {
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          const scrollY = window.pageYOffset;
          const sectionTop = section.offsetTop - 110;
          const sectionHeight = section.offsetHeight;
          const sectionID = section.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
            setActiveLink(sectionID);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    const scrollY = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  };
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "white" }}
      sticky="top"
      className="shadow py-4"
    >
      <Container>
        <Navbar.Brand href="#home">BOOST-IFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              onClick={() => scrollToSection("hero")}
              className={activeLink === "hero" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("about")} /* Adjust section IDs */
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("menu")}
              className={activeLink === "menu" ? "active" : ""}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("features")}
              className={activeLink === "features" ? "active" : ""}
            >
              Features
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("team")}
              className={activeLink === "team" ? "active" : ""}
            >
              Team
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("reservation")}
              className={activeLink === "reservation" ? "active" : ""}
            >
              Reservation
            </Nav.Link>
          </Nav>
          <a href="#">
            <Button className="btn-brand">See Menu</Button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
