import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full p-3 md:p-4 bg-emerald-900 text-white  flex justify-center items-center">
      <nav className=" flex justify-center items-center gap-5 font-semibold text-xl">
        <Link href={"/"}>Home</Link>
        <Link href={"https://github.com/ayushpatwal011"}>GitHub</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
