import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VerifySuccess = () => {
  return (
    <div className="grid justify-center h-[100vh] items-center">
      <div className="flex flex-col sm:shadow-2xl shadow-none p-8 rounded-lg items-center gap-4">
        <BsPatchCheckFill className="text-4xl text-green-500" />
        <h1 className="font-medium text-xl"> Password Reset Done</h1>
        <p className="min-w-[410px] text-gray-400 text-sm text-center">
          Now you can access your account
        </p>
        <div className="w-full">
          <Link to={"/signin"}>
            <button className="bg-purple-500 text-white mt-4 w-full font-medium rounded-lg py-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
