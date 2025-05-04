import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import React from "react";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
    );
}
