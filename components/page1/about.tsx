import React from 'react'

const About = () => {
  return (
    <div className="w-[100%] md:w-[40%] px-6 flex flex-col gap-5">
        <div className="text-2xl font-medium">
        <span className="text-[#98FAEC]">&lt;h1&gt;</span>
        <h1 className="ml-5 text-4xl">
        Hey <br />
        I'm <span className="text-[#98FAEC]">Ali</span>,<br />
        Front-End Developer
        </h1>
        <span className="text-[#98FAEC]">&lt;/h1&gt;</span>
        </div>
        <div className="">
        <span className="text-[#98FAEC]">&lt;p&gt;</span>
        <p className="ml-5 text-2xl">
        Creative and detail-oriented front-end developer with a passion for building responsive, user-friendly web interfaces.
        </p>
        <span className="text-[#98FAEC]">&lt;/p&gt;</span>
        </div>
        </div>
  )
}

export default About