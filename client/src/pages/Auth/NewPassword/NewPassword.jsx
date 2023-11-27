import React from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {
    
  return (
    <div className="grid justify-center h-[100vh] items-center">
      <div className="p-8 flex min-w-[410px] font-medium flex-col gap-6 rounded-lg shadow-2xl">
        <div>
          <h1 className=" text-2xl">Reset Password</h1>
          <p className="text-gray-500 font-normal mt-1">Enter your new password</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">New Password</label>
          <input
            className="border font-normal text-sm rounded-lg p-2 outline-none"
            type="password"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Re-type Password</label>
          <input
            className="border font-normal text-sm rounded-lg p-2 outline-none"
            type="password"
          />
        </div>

        <Link to={'/password-reset-done'}>
            <button className="bg-[#EEEEF4] rounded-lg py-2 w-full">
              Reset Password
            </button>
        </Link>
      </div>
    </div>
  );
};

export default NewPassword;
