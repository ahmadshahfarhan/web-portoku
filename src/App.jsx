import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import { Experience } from "./components/Experience";
import { AnimatedBeamDemo } from "./components/skils";
import Recent from "./components/Recent";
import "./css/porto.css";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import Certificate from "./components/Certificate";
import { BlurFade } from "./components/ui/blur";

function App() {
  return (
    <>
      <BlurFade delay={0.3} inView>
        <Navbar />
        <Sidebar />

        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
          <div id="experience">
            <Experience />
          </div>
          <AnimatedBeamDemo />
        </div>
        <div id="recent">
          <Recent />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </BlurFade>
    </>
  );
}

export default App;
