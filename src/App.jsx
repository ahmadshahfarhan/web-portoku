import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import { Experience } from "./components/Experience";
import { AnimatedBeamDemo } from "./components/skils";
import Recent from "./components/Recent";
import "./css/porto.css";

function App() {
  return (
    <>
      <div className="bg-[#171717] mx-auto" style={{ height: "1000vh" }}>
        <Sidebar />
        <Home />
        <div className="container">
          <About />
          <Experience />
          <AnimatedBeamDemo />
          <Recent />
        </div>
      </div>
    </>
  );
}

export default App;
