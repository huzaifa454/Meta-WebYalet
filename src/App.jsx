import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import About from "./Components/About"
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
    </div>
  );
}

export default App;
