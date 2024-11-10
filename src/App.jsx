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
      <div className="mx-auto">
        <Sidebar />
        <Home />
        <About />
        <Experience />
        <AnimatedBeamDemo />
        <Recent />
      </div>
    </>
  );
}

export default App;
