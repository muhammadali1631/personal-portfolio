import React from "react";
import PersonalDetails from "./personaldetails";
import About from "./about";
import Skills from "./skills";


const Main = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-5xl text-[#98FAEC] font-semibold my-10">
        Front-End Developer
      </h1>
      <div className="grid md:flex w-[100vw] justify-around">
        <div className="mb-20 md:mb-0">
        <PersonalDetails/>
        </div>
        <About/>
        <div className="hidden md:flex">
        <Skills/>
        </div>
    </div>
    </div>
  );
};

export default Main;
