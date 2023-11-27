import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
  return (
    <div className='grid justify-center min-h-[100vh] items-center'>
      <div className='p-8 font-medium rounded-lg shadow-2xl flex flex-col gap-4'>
        <Link to={'/signin'}>
            <IoIosArrowRoundBack className='text-4xl' />
        </Link>
        <h1>Forgot Password</h1>

        <p className='max-w-[410px] font-normal text-gray-500'>
          Enter your email address for which account you want to reset your
          password.
        </p>

        <div className='flex gap-1 mt-4 flex-col'>
            <label htmlFor="email">Email</label>
            <input className='border font-normal text-sm rounded-lg p-2 outline-none' type="email" placeholder='name@gmail.com' />
        </div>

        <button className='bg-purple-500 text-white mt-2 rounded-lg py-2'>Reset Password</button>
      </div>
    </div>
  );
}

export default RecoverPassword