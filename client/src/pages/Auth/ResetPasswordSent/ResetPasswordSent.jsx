import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResetPasswordSent = () => {
  return (
    <div className="grid justify-center h-[100vh] items-center">
      <div className="flex flex-col sm:shadow-2xl shadow-none p-4 rounded-lg items-center gap-4">
        <BsPatchCheckFill className="text-4xl text-green-500" />
        <h1 className="font-medium text-xl">Successfully Sent</h1>
        <p className="max-w-[410px] text-gray-400 text-sm text-center">
          We have sent instructions on how to reset your password to 
          <span className="font-medium text-black"> jenny.wilson@gmail.com</span>. Please follow the instructions from the email.
        </p>
        
      </div>
    </div>
  );
};

export default ResetPasswordSent;
