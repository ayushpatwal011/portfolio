import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import TimeLIne from "./components/TimeLIne";

export default function Home() {
  return (
    <div>
      <div
        className=" w-full max-w-screen-2xl mx-auto
    bg-gradient-to-b from-white to-fuchsia-300"
      >
        <Navbar />
        <Hero />
        <TimeLIne />
        <Skills />
      </div>
    </div>
  );
}
