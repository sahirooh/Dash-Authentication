import { RxDividerVertical } from "react-icons/rx";
import { MdFileDownload } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";

const Portfolio = () => {
  return (
    <div>
      <div className="">
        <div className="bg-white flex items-center h-[100px] mt-6 rounded-2xl w-[960px]">
          <div className="m-6">
            <h1 className="font-medium flex items-center text-[#535D66] text-[14px]">
              Total Portfolio Value{" "}
              <span className="bg-[#535D66] text-white flex ml-1 text-[10px] rounded-full px-[6px]">
                i
              </span>
            </h1>
            <p className="font-medium text-2xl">₹ 112,312.24</p>
          </div>
          <RxDividerVertical className="text-4xl opacity-20" />
          <div className="m-6">
            <h1 className="font-medium text-[#535D66] text-[14px]">
              Wallet Balances
            </h1>
            <div className="flex gap-10">
              <p className="font-medium flex items-center gap-2 text-2xl">
                22.3940771{" "}
                <span className="text-xs text-[#535D66] mt-1 items-center rounded-[100px] px-[6px] py-[1px] bg-[#EEEEF4]">
                  BTC
                </span>
              </p>
              <p className="font-medium flex items-center gap-2 text-2xl">
                ₹ 1,300.00{" "}
                <span className="text-xs text-[#535D66] mt-1 rounded-[100px] px-[6px] py-[2px] bg-[#EEEEF4]">
                  INR
                </span>
              </p>
            </div>
          </div>
          <div className="flex text-white font-medium ml-[60px] gap-2">
            <button className="bg-purple-600 flex items-center gap-1 px-4 py-2 rounded-lg">
              <MdFileDownload className="" />
              Deposit
            </button>
            <button className="bg-purple-600 flex items-center gap-1 px-4 py-2 rounded-lg">
              <MdFileUpload />
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
