import "./app.scss";
import styled from "styled-components";
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Tech from "./components/tech/Tech";



const App = () => {
  return (
    <div>
      <section id="Home Page">
        
        <Navbar />
        <Hero />
      </section>


      {/* <section id="Portfolio">
      <Portfolio />
      </section> */}

      <section id="About">
        <About />
      </section>
      <section id="Tech">
        <Tech />
      </section>
      <section id="Projects">
        <Works />
      </section>

      <section id="Contact">
        <Contact/>
        
      </section>
      \
      {/* <section id="My Interactive CV">
        helllo
      </section> */}
      {/* <section id="Works">
        <Works />
      </section> */}

    </div>
  );
};

export default App;
