import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/styles.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Features from "./components/Features";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import InstaPost from "./components/InstaPost";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Team />
      <Reviews />
      <Reservation />
      <InstaPost />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
