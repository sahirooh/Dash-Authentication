import React, { useRef, useState } from "react";
import { LuUserCircle } from "react-icons/lu";
import useAuth from "../hooks/useAuth";

const Header = ({ title }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useAuth();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="shadow-lg justify-between items-center flex px-[150px] h-16">
      <h1 className="font-medium text-[28px]">{title}</h1>
      <div className="relative" ref={dropdownRef}>
        <LuUserCircle
          onClick={toggleDropdown}
          className="relative cursor-pointer text-4xl"
        />
      </div>

      {isDropdownOpen && (
        <div className=" absolute right-4 mt-40 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-2">
            <div onClick={logout}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Log Out
              </li>
            </div>

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Transactions
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Support
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
