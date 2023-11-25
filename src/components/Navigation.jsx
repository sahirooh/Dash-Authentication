import { BiSupport } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" hidden md:flex flex-col w-[220px] shadow-lg justify-between h-[100vh]">
      <div className="">
        <Link to={"/"}>
          <img className="max-w-[160px]" src="/mylogo.png" alt="logo" />
          <div className="flex cursor-pointer p-2 font-medium text-[14px] items-center hover:bg-gray-200 ml-4 gap-2 rounded-lg ">
            <BiSolidDashboard className="ml-2" />
            <h1>Dashboard</h1>
          </div>
        </Link>

        <Link to={"/transaction"}>
          <div className="flex p-2 cursor-pointer font-medium text-[14px] items-center hover:bg-gray-200 rounded-lg ml-4 gap-2 ">
            <LiaExchangeAltSolid className="ml-2" />
            <h1>Transactions</h1>
          </div>
        </Link>
      </div>

      <Link to={"/support"}>
        <div className="flex font-medium cursor-pointer rounded-lg mb-4 text-[14px] hover:bg-gray-200 p-2 items-center gap-2 ml-6">
          <BiSupport />
          <h1>Support</h1>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
