import React from "react";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate =useNavigate()
  return (
    <header class="shadow-lg px-8 mx-24  bg-white mt-4 lg:pb-0">
      <div class="max-w-7xl  py-4  ">
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0">
            <a href="#" title="" class="flex">
              <img class="w-auto h-8 lg:h-10" src="./assets/logo.svg" alt="" />
             
              <p className="p-1 ml-2 font-bold text-uppercase tracking-wider text-black text-2xl">MY CHEVA</p>
            </a>
          </div>

          <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>

            <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a href="#home" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Home
            </a>

            <a href="#about" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              About
            </a>

            <a href="#categories" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Categories
            </a>

            <a href="#contact" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Contact
            </a>
          </div>

          <div className="ml-10">
            <a href="/login" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-medium text-[#F8A400] transition-all duration-200 bg-[#EEEDFF] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black hover:text-white" role="button">
              Looking for help
            </a>
            {/* <a href="#" title="" class="items-center justify-center hidden px-4 py-3 ml-6 text-base font-medium text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black hover:text-white" role="button">
              Login
            </a> */}
            <button onClick={() =>navigate('/Login')} className="items-center justify-center hidden px-4 py-3 ml-6 text-base font-medium text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black hover:text-white"> Login </button>
          </div>
        </nav>

        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
          <div class="flow-root">
            <div class="flex flex-col px-6 -my-2 space-y-1">
              <a href="#home" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Home
              </a>

              <a href="#about" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                About
              </a>

              <a href="#categories" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Categories
              </a>

              <a href="#contact" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Contact
              </a>
            </div>
          </div>

          <div class="px-6 mt-6 flex-column">
            <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-[#F8A400] transition-all duration-200 bg-[#EEEDFF] border border-transparent rounded-md tems-center hover:bg-black focus:bg-black" role="button">
              Looking for help
            </a>
            <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md tems-center hover:bg-black focus:bg-black hover:text-white" role="button">
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
