import React from 'react'
import Project from './Projects'
import { MdOutlineWorkOutline } from "react-icons/md";

const Work = () => {
  return (
    <div className='flex flex-col items-center py-10 gap-10'>
        <h1 className='text-7xl text-[#12F7D6]'><MdOutlineWorkOutline/></h1>
        <div className='flex flex-col items-center gap-5'>
        <h2 className='text-5xl text-[#12F7D6] border-b-[3px] py-2 border-[#12F7D6]'>Work</h2>
        <p className='px-2'>I had the pleasure of with this projects</p>
        </div>
        <Project/>
    </div>
  )
}

export default Work