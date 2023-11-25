import React, { useEffect, useRef, useState } from "react";
import { LuUserCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
            <Link to={"/"}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Dashboard
              </li>
            </Link>
            
            <Link to={"/transaction"}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Transactions
              </li>
            </Link>
            <Link to={"/support"}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Support
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
