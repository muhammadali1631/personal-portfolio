import React from 'react'
import Image from 'next/image'
import { IoIosMail } from 'react-icons/io'
import { FaDownload, FaLocationDot } from 'react-icons/fa6'

const PersonalDetails = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20">

        <div className="border-white border-4 shad py-7 own w-80 flex flex-col items-center gap-5">
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&s"
            }
            alt="Profile"
            height={200}
            width={200}
            className="h-28 w-28 rounded-full object-contain"
          ></Image>
          <div>
            <h2 className="text-center text-xl font-semibold">Ali Shahzad</h2>
            <p>Front-End Developer</p>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="flex items-center gap-2 text-base">
                <span className="text-[#12F7D6]">
                  {" "}
                  <IoIosMail />{" "}
                </span>{" "}
                m.alishahzad200@gmail.com
              </p>
              <p className="flex items-center gap-2 text-lg">
                <span className="text-[#12F7D6]">
                  {" "}
                  <FaLocationDot />{" "}
                </span>{" "}
                Turkey
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="bg-[#12F7D6] py-1 px-2 rounded-2xl text-black">
                HTML
              </span>
              <span className="bg-[#12F7D6] py-1 px-2 rounded-2xl text-black">
                CSS
              </span>
              <span className="bg-[#12F7D6] py-1 px-2 rounded-2xl text-black">
                JS
              </span>
              <span className="bg-[#12F7D6] py-1 px-2 rounded-2xl text-black">
                NEXT JS
              </span>
            </div>
            <button className="bg-white rounded-2xl items-center gap-2 w-60  text-black flex justify-center py-2">
              Download CV <FaDownload />
            </button>
          </div>
        </div>
    </div>
  )
}

export default PersonalDetails