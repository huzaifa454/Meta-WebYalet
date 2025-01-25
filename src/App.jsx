import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';
 
function App() {
  return (
    <div className="text-black">
      <Navbar/>
      <div id="home">
      <Home />
    </div>
    <div id="about">
      <About/>
    </div>
    <div id="service">
      <Service/>
    </div>
    <div id="projects">
      <Projects/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
    </div>
  );
}

export default App;
