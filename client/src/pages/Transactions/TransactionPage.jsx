import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import History from "./Components/History";
import { FiDownload } from "react-icons/fi";

const Transactions = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="flex-grow">
        <Header title={"Transactions"} />
        <div className="bg-[#EEEEF4] flex flex-col gap-6 items-center h-[calc(100vh-64px)]">
          <button className="font-medium flex items-center mt-6 mr-[116px] self-end gap-2 text-white rounded-lg text-sm bg-purple-600 px-4 py-2">
            <FiDownload className="text-lg" />
            Export CSV
          </button>
          <History />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
