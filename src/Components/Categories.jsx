import React from "react";


const Categories = () => {
  return (
    <div id="categories" className="py-8 md:py-10 px-4 md:px-6 lg:px-8">
    <div className="uppercase tracking-widest text-center">
      <p className="text-[#F8A400] text-sm md:text-base">Categories Divition</p>
    </div>
    
    <div className="text-center mt-4">
      <h1 className="text-2xl md:text-3xl text-black">My Cheva</h1>
    </div>

    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 lg:mt-12">
        <div className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 md:p-5">
            <div className="flex justify-center items-center">
              <img src="./assets/ic_web.svg" className="w-12 md:w-16 h-12 md:h-16 object-contain" alt="Web Development" />
            </div>
            <h1 className="text-black text-center text-lg md:text-xl mt-4">Web Development</h1>
            <p className="text-[#F1A614] text-center mt-2 uppercase tracking-widest text-sm">406 Posts</p>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img src="./assets/img_divition.svg" className="w-full max-w-[200px]" alt="divider" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 md:p-5">
            <div className="flex justify-center items-center">
              <img src="./assets/logo_ui.svg" className="w-12 md:w-16 h-12 md:h-16 object-contain" alt="UI/UX Designer" />
            </div>
            <h1 className="text-black text-center text-lg md:text-xl mt-4">UI/UX Designer</h1>
            <p className="text-[#554BFE] text-center mt-2 uppercase tracking-widest text-sm">124 Posts</p>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img src="./assets/img_divition.svg" className="w-full max-w-[200px]" alt="divider" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 md:p-5">
            <div className="flex justify-center items-center">
              <img src="./assets/logo_ad.svg" className="w-12 md:w-16 h-12 md:h-16 object-contain" alt="Android Development" />
            </div>
            <h1 className="text-black text-center text-lg md:text-xl mt-4">Android Development</h1>
            <p className="text-[#F83B6B] text-center mt-2 uppercase tracking-widest text-sm">147 Posts</p>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img src="./assets/img_divition.svg" className="w-full max-w-[200px]" alt="divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 max-w-4xl mx-auto">
        <div className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 md:p-5">
            <div className="flex justify-center items-center">
              <img src="./assets/logo_game.svg" className="w-12 md:w-16 h-12 md:h-16 object-contain" alt="Game Development" />
            </div>
            <h1 className="text-black text-center text-lg md:text-xl mt-4">Game Development</h1>
            <p className="text-[#554BFE] text-center mt-2 uppercase tracking-widest text-sm">406 Posts</p>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img src="./assets/img_divition.svg" className="w-full max-w-[200px]" alt="divider" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 md:p-5">
            <div className="flex justify-center items-center">
              <img src="./assets/logo_startup.svg" className="w-12 md:w-16 h-12 md:h-16 object-contain" alt="Start-up" />
            </div>
            <h1 className="text-black text-center text-lg md:text-xl mt-4">Start-up</h1>
            <p className="text-[#F83B6B] text-center mt-2 uppercase tracking-widest text-sm">124 Posts</p>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img src="./assets/img_divition.svg" className="w-full max-w-[200px]" alt="divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Categories;
