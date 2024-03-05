import "./App.css";
import Footer from "./components/footer";
import About from "./pages/about";
import Home from "../src/pages/home";
import Navbar from "../src/components/navbar";

import { Element } from "react-scroll";
import Project from "./pages/project";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
