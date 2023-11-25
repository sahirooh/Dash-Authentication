import React from 'react'
import { BsChatFill } from "react-icons/bs";

const Info = () => {
  return (
    <div className="flex mt-6 gap-6">
      <div>
        <BsChatFill className="text-2xl text-purple-700" />
        <h1 className="font-medium mt-4 text-3xl">Live Chat</h1>
        <p className="text-gray-400 max-w-[400px]">
          Don’t have time to wait for the answer? Chat with us now.
        </p>
      </div>
      <div className="w-[490px] bg-[url('/grid.png')] h-[100px] rounded-[10px] bg-purple-700 bg-cover">
        <div className="flex flex-col">
          <label className="mx-6 mt-5 bg-white font-medium text-purple-600 absolute px-[6px] py-1 rounded-full">
            Chatbot
          </label>
          <h1 className="mt-[64px] font-medium text-lg mx-6 text-white">
            Chat with us now
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Info