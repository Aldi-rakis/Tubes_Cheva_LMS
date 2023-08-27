import React from "react";


const Categories = () => {
  return (
    <div id="categories" className="py-10">
      <div className="uppercase tracking-widest flex justify-center items-center">
        <p className="text-[#F8A400]">Categories Divition</p>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-black mt-4">My Cheva</h1>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full ">
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="flex justify-center items-center">
                <img src="./assets/ic_web.svg" />
              </div>
              <h1 className="text-black text-center">Web Development</h1>
              <p className="text-[#F1A614] text-center mt-2 uppercase tracking-widest">406 Posts</p>
              <div className="flex justify-center items-center mt-8">
                <img src="./assets/img_divition.svg" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="flex justify-center items-center">
                <img src="./assets/logo_ui.svg" />
              </div>
              <h1 className="text-black text-center">UI/UX Designer</h1>
              <p className="text-[#554BFE] text-center mt-2 uppercase tracking-widest">124 Posts</p>
              <div className="flex justify-center items-center mt-8">
                <img src="./assets/img_divition.svg" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="flex justify-center items-center">
                <img src="/src/assets/logo_ad.svg" />
              </div>
              <h1 className="text-black text-center">Android Development</h1>
              <p className="text-[#F83B6B] text-center mt-2 uppercase tracking-widest">147 Posts</p>
              <div className="flex justify-center items-center mt-8">
                <img src="./assets/img_divition.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-black justify-center mt-8 ">
          <div className="ml-10  mr-10 rounded bg-white shadow px-12 w-96">
            <div className="p-5">
              <div className="flex justify-center items-center">
                <img src="./assets/logo_game.svg" />
              </div>
              <h1 className="text-black text-center">Game Development</h1>
              <p className="text-[#554BFE]  text-center mt-2 uppercase tracking-widest">406 Posts</p>
              <div className="flex justify-center items-center mt-8">
                <img src="/src/assets/img_divition.svg" />
              </div>
            </div>
          </div>
          <div className="mx-6 w-96 bg-white shadow px-8 ">
            <div className="p-5">
              <div className="flex justify-center items-center">
                <img src="/src/assets/logo_startup.svg" />
              </div>
              <h1 className="text-black text-center">Start-up</h1>
              <p className="text-[#F83B6B] text-center mt-2 uppercase tracking-widest">124 Posts</p>
              <div className="flex justify-center items-center mt-8">
                <img src="./assets/img_divition.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
