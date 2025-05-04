import Link from 'next/link'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='border-t-[1px] border-white p-2 flex justify-around items-center w-[100%] max-w-[1500px]'>
        <p>&copy; 2024 Ali Shahzad. All right reserved</p>
        <div className='flex gap-5'>
            <Link href={'https://www.linkedin.com/in/ali-shahzad-42aa24234/'} target='_blank' className='p-2 bg-[#12F7D6] text-black text-lg rounded-full'><BsLinkedin/></Link>
            <Link href={'https://github.com/muhammadali1631/'} target='_blank' className='p-2 bg-[#12F7D6] text-black text-lg rounded-full'><FaGithub/></Link>
        </div>
    </div>
  )
}

export default Footer