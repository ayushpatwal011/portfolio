"use client"
import { FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiGithub, SiMysql, SiTailwindcss, SiPrisma, SiNextdotjs, SiVite, SiExpress, SiRedux } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { useEffect, useState } from "react";
import "./Skills.css"; // Import CSS for animations

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500); // Delay for fade-in effect
  }, []);

  return (
    <div className="border-b border-black pb-20 px-4 md:px-10" id="skills">
      <h2 className={`my-20 text-center text-4xl font-bold fade-in ${visible ? "show" : ""}`}>
        Programming <span className="text-emerald-800 font-bold">Skills</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {[
          { icon: <FaHtml5 className="text-5xl text-orange-500" />}, 
          { icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
          { icon: <FaBootstrap className="text-5xl text-purple-600" /> },
          { icon: <SiTailwindcss className="text-5xl text-cyan-300" /> },
          { icon: <SiJavascript className="text-5xl text-yellow-400" /> },
          { icon: <FaReact className="text-5xl text-blue-400" /> },
          { icon: <SiRedux className="text-5xl text-purple-500" /> },
          { icon: <SiVite className="text-5xl text-purple-600" />},
          { icon: <SiNextdotjs className="text-5xl text-black" /> },
          { icon: <FaNodeJs className="text-5xl text-green-600" />},
          { icon: <SiExpress className="text-5xl text-gray-700" />},
          { icon: <SiMongodb className="text-5xl text-green-800" />},
          { icon: <SiMysql className="text-5xl text-blue-500" /> },
          { icon: <SiPrisma className="text-5xl text-blue-900" />},
          { icon: <TbDatabase className="text-5xl text-gray-400" /> },
          { icon: <FaGitAlt className="text-5xl text-red-500" />},
          { icon: <SiGithub className="text-5xl text-black" />}
        ].map(({ icon }, index) => (
          <div key={index} className="floating-icon border-4 border-neutral-800 p-2 text-center">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
