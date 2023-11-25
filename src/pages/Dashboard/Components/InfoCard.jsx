import React from "react";

const InfoCard = () => {
  return (
    <div className="flex gap-6">
      <div className="max-w-[468px] bg-[url('/dots.png')] rounded-[10px] bg-white bg-cover">
        <div className="flex flex-col">
          <label className="mx-6 mt-5 bg-purple-600 text-white absolute px-[6px] py-1 rounded-full">
            Loans
          </label>
          <h1 className="mt-[64px] font-medium text-lg mx-6 pb-4">
            Learn more about Loans – Keep your Bitcoin, access it’s value
            without selling it
          </h1>
        </div>
      </div>
      <div className="max-w-[468px] bg-[url('/grid.png')] rounded-[10px] bg-purple-700 bg-cover">
        <div className="flex flex-col">
          <label className="mx-6 mt-5 bg-white font-medium text-purple-600 absolute px-[6px] py-1 rounded-full">
            Contact
          </label>
          <h1 className="mt-[64px] font-medium text-lg mx-6 text-white pb-4">
            Learn more about our real estate, mortgage, and corporate account
            services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
