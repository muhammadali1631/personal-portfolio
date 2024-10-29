import Image from 'next/image';
import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import img from '@/images/image2.webp'
const About = () => {
  return (
    <div className='bg-[#111] pb-16' id='about'>
        <div className='text-[#12F7D6] text-7xl w-[100%] flex justify-center py-20'>
        <MdOutlineKeyboardDoubleArrowDown/>
        </div>
        <div className='w-[100%] flex flex-wrap justify-around items-center'>
        <Image src={img} alt=""  className='h-[400px] w-[300px] object-cover rounded-xl'/>
            <div className=' mt-10 w-[90%]  sm:w-[600px]'>
                <h1 className='border-[#12F7D6] bg-[#292F36] border-2 own1 w-[150px] text-center p-3 text-2xl font-medium'>About Me</h1>
                <p className='bg-[#292F36] p-4 rounded-xl mt-5 text-xl'>I am a passionate and skilled front-end developer with expertise in creating visually appealing, responsive, and user-friendly websites. My tech stack includes HTML, CSS, JavaScript, Next.js, Tailwind CSS, and Framer Motion, allowing me to build fast, interactive web applications with seamless animations. I am committed to delivering high-quality, optimized code and enjoy turning complex problems into intuitive digital experiences.</p>
            </div>       
        </div>
    </div>
  )
}

export default About