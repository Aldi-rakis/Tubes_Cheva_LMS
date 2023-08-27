import React from "react";


const Hero = () => {
  return (
    <div className="justify-center items-center px-10  py-8 ">
      <div className="flex justify-center items-center py-8">
        <img src="./assets/logo_big.svg" />
      </div>
      <div className="mx-64">
        <input class="appearance-none border w-full py-4 px-5 rounded shadow-xl text-gray-400 border-l-4 border-l-[#F8A400] leading-tight dark:bg-white focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Search"></input>
      </div>
      <div className="py-8">
        <img src="./assets/img.svg" />
      </div>
    </div>
  );
};

export default Hero;
