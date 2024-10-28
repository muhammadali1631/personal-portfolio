import Link from 'next/link'
import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";


const Header = () => {
  return (
    <div className='mx-8 my-3'>
        <div className='py-3 flex justify-between items-center border-b-2 border-[#43454D]'>
            <Link href={"/"}>
         <p className='text-2xl font-semibold'><span className='text-[#12F7D6]'>&lt;P/&gt;</span>Ali</p>
         </Link>
         <nav className='list-none hidden sm:flex gap-7 text-xl'>
            <Link href={'/'}> <li className='hover:text-[#12F7D6] duration-300'>Home</li> </Link>
            <Link href={'/'}> <li className='hover:text-[#12F7D6] duration-300'>Work</li> </Link>
            <Link href={'/'}> <li className='hover:text-[#12F7D6] duration-300'>Skills</li> </Link>
            <Link href={'/'}> <li className='flex items-center gap-2 hover:text-[#12F7D6] duration-300'><span className='text-[#12F7D6]'><BsLinkedin/></span>LinkedIn </li> </Link>
            <Link href={'/'}> <li className='flex items-center gap-2 hover:text-[#12F7D6] duration-300'><span className='text-[#12F7D6]'><FaGithub/></span>GitHub </li> </Link>
         </nav>
        </div>
      {/* <hr /> */}
    </div>
  )
}

export default Header
