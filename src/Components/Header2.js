import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
const Header2 = () => {
  const navigate = useNavigate();
  let Links = [
    { name: "Home", link: "/#" },
    { name: "About", link: "#about" },
    { name: "Categories", link: "#categories" },
    { name: "Contact", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 mb-3 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 ">
          <img class="w-auto h-8 lg:h-10 mr-3" src="./assets/logo.svg" alt="" />
          <span>CHEVALIER</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 "
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold md:m-6">
              <a
                href={link.link}
                className="text-gray-800 hover:text-[#F8A400]"
              >
                {link.name}
              </a>
            </li>
          ))}

          <button className="bg-[#EEEDFF] text-[#F8A400] md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static sm: ">
            Looking for help
          </button>

          <button
            onClick={() => navigate("/Login")}
            className="bg-[#F8A400] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static "
          >
            Log In
          </button>
        </ul>

        {/* button */}
      </div>
    </div>
  );
};

export default Header2;
