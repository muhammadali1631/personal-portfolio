"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from 'react-icons/rx';


const Header = () => {
  const [attr, setAttr] = useState('hidden'); 
  const [attr2, setAttr2] = useState('block');
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setAttr(isOpen ? 'hidden' : 'flex');
    setAttr2(isOpen ? 'block' : 'hidden');
  }
  return (
    <div className='mx-8 my-3'>
        <div className='py-3 flex justify-between items-center border-b-2 border-[#43454D]'>
            <Link href={"/"}>
         <p className='text-2xl font-semibold'><span className='text-[#12F7D6]'>&lt;Ali/&gt;</span></p>
         </Link>
         <nav className='list-none hidden sm:flex gap-7 text-xl'>
            <Link href={'/'}> <li className='hover:text-[#12F7D6] duration-300'>Home</li> </Link>
            <Link href={'#about'}> <li className='hover:text-[#12F7D6] duration-300'>About</li> </Link>
            <Link href={'#skills'}> <li className='hover:text-[#12F7D6] duration-300'>Skills</li> </Link>
            <Link href={'#work'}> <li className='hover:text-[#12F7D6] duration-300'>Work</li> </Link>
            <Link href={'https://www.linkedin.com/in/ali-shahzad-42aa24234/'} target='_blank'> <li className='flex items-center gap-2 hover:text-[#12F7D6] duration-300'><span className='text-[#12F7D6]'><BsLinkedin/></span>LinkedIn </li> </Link>
            <Link href={'https://github.com/muhammadali1631/'} target='_blank'> <li className='flex items-center gap-2 hover:text-[#12F7D6] duration-300'><span className='text-[#12F7D6]'><FaGithub/></span>GitHub </li> </Link>
         </nav>
         <div className='sm:hidden'>
            <IoMdMenu onClick={openMenu} className={`${attr2} text-3xl cursor-pointer `}/>
            <RxCross2 onClick={openMenu} className={`${attr} text-3xl cursor-pointer`}/>
         </div>
        </div>
        <div className={`list-none ${attr} flex-col sm:hidden items-center text-xl gap-1 py-2`}>
        <Link href={'/'}> <li className='hover:text-[#12F7D6] duration-300'>Home</li> </Link>
            <Link href={'#about'}> <li className='hover:text-[#12F7D6] duration-300'>About</li> </Link>
            <Link href={'#skills'}> <li className='hover:text-[#12F7D6] duration-300'>Skills</li> </Link>
            <Link href={'#work'}> <li className='hover:text-[#12F7D6] duration-300'>Work</li> </Link>
            <Link href={'https://www.linkedin.com/in/ali-shahzad-42aa24234/'} target='_blank'> <li className='flex items-center gap-2 hover:text-[#12F7D6] duration-300'><span className='text-[#12F7D6]'><BsLinkedin/></span>LinkedIn </li> </Link>
            <Link href={'https://github.com/muhammadali1631/'} target='_blank'> <li className='flex items-center gap-2 hover:text-[#12F7D6] duration-300'><span className='text-[#12F7D6]'><FaGithub/></span>GitHub </li> </Link>
        </div>
    </div>
  )
}

export default Header
