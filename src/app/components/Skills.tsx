import React from "react";
import AskedQuestion from "./AskedQuestion";

const Skills = () => {
  return (
    <div className="w-full flex justify-center gap-5 md:gap-20 p-4 md:p-10  text-black ">
      <section className="md:w-[40%] p-4 md:p-20 bg-white rounded-xl hover:bg-gray-200 duration-150">
        <h1 className="font-base">Asked Question</h1>
        <AskedQuestion />
      </section>
      <section className=" flex-col justify-center md:w-[40%] p-4 md:p-20 bg-gray-900  rounded-xl hover:bg-gray-800 duration-150 text-white">
        <h1 className="py-3 text-lg">Contect Me:</h1>
        <p>Phone: +91 8439569625</p>
        <p>
          Email:{" "}
          <a href="mailto:patwalayush2005@ayushpatwal.com">
            patwalayush2005@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/ayushpatwal/">ayushpatwal</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/ayushpatwal011">ayushpatwal2005</a>
        </p>
      </section>
    </div>
  );
};

export default Skills;
