import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TimeLIne from "./components/TimeLIne";
import Contact from "./components/Contact"
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className=" w-full max-w-screen-2xl mx-auto border-8  border-emerald-900 ">
      <div
        className="
    bg-gradient-to-r from-white to-pink-100"
      >
        <Navbar />
        <Hero />
        <TimeLIne />
        <Skills/>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
