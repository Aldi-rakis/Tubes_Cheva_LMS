import React from "react";
const About = () => {
  return (
    <div id="about">
      <div className="py-8 flex justify-center items-center">
        <h1 className="font-bold text-black text-3xl">What's My Cheva?</h1>
      </div>
      <div className="mt-8 flex">
        <div className="w-1/2 mx-10 px-20 py-10 text-lg leading-8 ">
          <p className="text-black font-normal">My Cheva adalah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="w-1/2">
          <img src="./assets/about.svg" className="h-80" />
        </div>
      </div>
      {/* <div className="flex">
        <div className="w-1/2 mx-4 px-10">
          <img src="/src/assets/services.svg" className="px-8 mx-6 py-8" />
        </div>
        <div className="bg-gray-300 py-10 place-content-around mx-36 w-1/2">
          <div className="max-w-5xl px-4 mx-auto">
            <div className="grid items-center gap-y-10">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with Celebration.</h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div class=" py-10 flex justify-center items-center bg-white sm:py-16 lg:py-24">
        <div class="px-8 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="ml-10">
              <img src="./assets/services.svg" />
            </div>

            <div className="mx-36">
              <h2 class="text-4xl font-bold leading-tight text-black">Perfect Solution for Your Talent.</h2>
              <p class="mt-4 text-base leading-relaxed  text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
              <a href="#" title="" class="items-center justify-center hidden px-4 py-3 text-base font-medium text-white transition-all duration-200 mt-4 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
