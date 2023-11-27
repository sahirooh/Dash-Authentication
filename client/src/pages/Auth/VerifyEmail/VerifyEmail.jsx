import React from 'react'
import { IoMdMail } from 'react-icons/io'

const VerifyEmail = () => {
  return (
    <div className="grid justify-center h-[100vh] items-center">
      <div className="flex sm:shadow-2xl shadow-none flex-col p-4 rounded-lg items-center gap-4">
        <IoMdMail className="text-4xl text-purple-500" />
        <h1 className="font-medium text-xl">Email Verification</h1>
        <p className="max-w-[410px] text-gray-400 text-sm text-center">
          We have sent you an email verification to{" "}
          <span className="font-medium text-black">jenny.wilson@gmail.com</span>
          . If you didn’t receive it, click the button below.
        </p>
        <button className="bg-[#EEEEF4] font-medium w-full rounded-lg py-2">
          Re-send Email
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail