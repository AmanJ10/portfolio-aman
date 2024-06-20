import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Profiles from "./Profiles";
import Projects from "./Projects";
import Skills from "./Skills";

function Content() {
  return (
    <div>
      <HeroSection />
      {/* <About /> */}
      <div>
        <Profiles />
      </div>
      <Skills />
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default Content;
