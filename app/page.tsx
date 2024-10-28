import React from "react";
import Main from "@/components/page1/main";
import About from "@/components/page2/about";
import Skills from "@/components/page3/Skills";
import Work from "@/components/page4/Work";

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Skills/>
      <Work/>
    </div>
    );
}
