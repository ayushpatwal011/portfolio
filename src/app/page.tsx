import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TimeLIne from "./components/TimeLIne";

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
      </div>
      <div className="bg-gradient-to-r from-gray-200 to bg-slate-300">
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
