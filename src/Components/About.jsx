import React from "react";
const About = () => {
  return (

    <section id="about" className="px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            What's My Cheva?
          </h1>
        </div>

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-black text-justify font-poppins text-lg md:text-xl lg:text-2xl leading-relaxed">
              My Cheva adalah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./assets/about.svg"
              alt="About illustration"
              className="h-48 md:h-64 lg:h-80 w-auto object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[60%] order-2 md:order-1">
            <img
              src="./assets/services.svg"
              alt="Services illustration"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-[40%] space-y-4 order-1 md:order-2 text-justify">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-black leading-tight">
              Perfect Solution for Your Talent.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <a
              href="#"
              className="max-w-max inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-[#F8A400] hover:bg-blue-700 transition-all duration-200 rounded-md w-full md:w-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
