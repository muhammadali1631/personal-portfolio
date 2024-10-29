"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import project1 from '@/images/project1.png'
import project2 from '@/images/project2.png'
import project3 from '@/images/project3.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { LuMousePointer2 } from "react-icons/lu";
import { MdWork } from "react-icons/md";

import Link from 'next/link'

interface dataType {
  image: StaticImageData,
  link: string,
}

const data:dataType[] = [{
  image: project1,
  link: "https://blog-web-rzgh.vercel.app/"
},
{
  image: project2,
  link: "https://architects-assignment.vercel.app/"
},
{
  image: project3,
  link: "https://clone-random-web.vercel.app/"
}
]
const Project = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer); 
  }, [index]);
    
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  }; 
  
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className='flex flex-col items-center'>
    <div className='flex items-center'>
      <FaArrowLeft onClick={handlePrev} className='text-3xl md:text-6xl bg-gray-700 p-1 md:p-3 rounded-full cursor-pointer'/>
      <Link href={data[index].link}>
      <Image src={data[index].image} alt='projects' className='w-[280px] sm:w-[400px] md:w-[600px]'/>
      </Link>
      <FaArrowRight onClick={handleNext} className='text-3xl md:text-6xl bg-gray-700 p-1 md:p-3 rounded-full cursor-pointer'/>
    </div>
      <div className='list-none'>
        <Link href={data[index].link} className='text-[#12F7D6] text-xl flex items-end border-b-2 py-2'><li>View Website</li> <LuMousePointer2/></Link>
      </div>
    </div>
  )
}

export default Project