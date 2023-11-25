import React from 'react'
import { IoMdMail } from "react-icons/io";

const Intro = () => {
  return (
    <div className='mt-6'>
      <IoMdMail className='text-2xl text-purple-700' />
      <h1 className='font-medium mt-4 text-3xl'>Contact Us</h1>
      <p className='text-gray-400 max-w-[400px]'>
        Have a question or just want to know more? Feel free to reach out to us.
      </p>
    </div>
  );
}

export default Intro