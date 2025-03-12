import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import { Experience } from "./components/Experience";
import { AnimatedBeamDemo } from "./components/skils";
import Recent from "./components/Recent";
import "./css/porto.css";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Experience />
      <AnimatedBeamDemo />
      <Recent />
      <Contact />
    </>
  );
}

export default App;
