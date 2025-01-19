import Navbar from "./Components/Navbar";
import Home from "./Components/Home"

function App() {
  return (
    <div className="text-black">
      <Navbar/>
      <div id="home">
      <Home />
    </div>
    </div>
  );
}

export default App;
