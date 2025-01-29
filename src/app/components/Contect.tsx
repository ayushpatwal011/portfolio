import React from "react";
import AskedQuestion from "./AskedQuestion";

const Contect = () => {
  return (
    <div className="w-full md:flex justify-center  md:gap-20 p-4 md:p-10  text-black ">
      <section className="md:w-[40%] p-4 md:p-20 sm:my-4 bg-white rounded-xl hover:bg-gray-200 duration-150">
        <h1 className="font-base">Asked Question</h1>
        <AskedQuestion />
      </section>
      <section className="flex-row md:flex-col justify-center md:w-[40%] p-4 md:p-10   sm:my-4 lg:p-20 bg-gray-900  rounded-xl hover:bg-gray-800 duration-150 text-white">
        <h1 className="py-3 text-lg">Contect Me:</h1>
        <p>Phone: +91 8439569625</p>
        <p>
          Email:{" "}
          <a href="mailto:patwalayush2005@ayushpatwal.com">
            patwalayush2005@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/ayushpatwal011">ayushpatwal2005</a>
        </p>
        <p>Kotdwara, Pauri Garhwal, Uttarakhand</p>
      </section>
    </div>
  );
};

export default Contect;
