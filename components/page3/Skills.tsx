import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiComputerDesktop } from "react-icons/hi2";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";


const Skills = () => {
  return (
    <div className='backgound' id='skills'>
        <div className='bg-[#292F36] h-full w-full absolute -z-10 opacity-90'></div>
        <div className='realtive z-20 grid justify-center w-[100%] py-10 gap-10'>
        <div className=''>
        <h1 className='text-9xl text-[#12F7D6] grid justify-center'>&lt;/&gt;</h1>
        </div>
         <div className='flex items-center flex-col gap-3'>
          <h1 className='text-[#12F7D6] text-4xl border-b-[3px] border-[#12F7D6] py-2'>Skills</h1>
          <p className='px-3'>I am striving to never stop learning and improving</p>
        </div>
        <div className=' mt-10 flex flex-col items-center gap-10'>
            <div className='bg-[#12F7D6] gap-2 text-black flex flex-col items-center text-2xl border-l-8 py-6 w-72 border-blue-600 rounded-lg'>
              <h1><HiComputerDesktop/></h1>
              <p>Web Development</p>
            </div>
          <div className='flex gap-12 sm:gap-20 flex-wrap justify-center items-center'>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-orange-600 rounded-full'><FaHtml5/></h1>
            <p className='text-xl text-orange-600'>HTML</p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-blue-600 rounded-full'><IoLogoCss3/></h1>
            <p className='text-xl text-blue-600'>CSS</p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-yellow-600 rounded-full'><FaNodeJs/></h1>
            <p className='text-xl text-yellow-600'>JS</p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-orange-600 rounded-full'><BiLogoTypescript/></h1>
            <p className='text-xl text-orange-600'>TS</p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-blue-600 rounded-full'><RiTailwindCssFill/></h1>
            <p className='text-xl text-blue-600'>Tailwind</p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-yellow-600 rounded-full'><MdAnimation/></h1>
            <p className='text-xl text-yellow-600'>GSAP</p>
          </div>
          </div>
          <div className='flex flex-col items-center gap-10'>
          <div className='bg-[#12F7D6] gap-2 text-black flex flex-col items-center text-2xl border-l-8 py-6 w-72 border-blue-600 rounded-lg'>
              <p>Learning</p>
            </div>
            <div className='flex gap-12 sm:gap-20 flex-wrap justify-center '>
            <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-orange-600 rounded-full'><RiNextjsFill/></h1>
            <p className='text-xl text-orange-600'>NEXT JS</p>
           </div>
            <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-blue-600 rounded-full'><SiMongodb/></h1>
            <p className='text-xl text-blue-600'>Mongodb</p>
           </div>
            <div className='flex flex-col items-center gap-1'>
            <h1 className='text-4xl p-6 bg-yellow-600 rounded-full'><TbBrandFramerMotion/></h1>
            <p className='text-xl text-yellow-600'>Framer <br /> Motion</p>
           </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Skills