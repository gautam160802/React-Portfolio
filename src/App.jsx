import Navbar from "./components/Navbar";
import logo from "./assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8"></div>

      <div className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
          <FaInstagram />
        </div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
