import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="shadow-2xl hover:shadow-inner rounded-2xl p-4 flex flex-col gap-4">
        <div className="">
          <h1>Welcome to Crypto App</h1>
          <p>Create a free account by filling data below.</p>
        </div>

        <div className="gap-4 flex flex-col">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                type="text"
                placeholder="James"
                className="border w-auto flex rounded-md px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Bond"
                className="border rounded-md px-2 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              placeholder="******"
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Repeat Password</label>
            <input
              type="password"
              placeholder="******"
              className="border rounded-md px-2 py-1"
            />
          </div>

          <div>
              <input type="checkbox" id="form-checkbox" className="opacity-50" />
              <label for="form-checkbox" className="ml-1">
                I agree to the{" "}
                <span className="text-purple-700">terms of service</span>
              </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#EEEEF4] flex-grow rounded-lg p-2">
              Create Account
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to={"/signin"}>
              <span className="text-purple-700">Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
