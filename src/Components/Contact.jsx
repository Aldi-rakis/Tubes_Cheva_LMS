import React from "react";


const Contact = () => {
  return (
    <div id="contact" className="py-10 px-8">
      <img src="./assets/maps.svg" className="absolute -z-10 w-[96%]" />
      <div className="mx-56 mt-36 bg-white py-10 shadow-xl justify-center items-center rounded">
        <div className="">
          <h1 className="text-black text-center font-bold text-3xl">Get in MyCheva</h1>
          <form>
            <div className="px-24 py-12">
              <div className="flex">
                <div className="mx-8 w-1/2">
                  <label className="text-gray-400">Name</label>
                  <input class="appearance-none border-b-2  border-b-black w-full py-2 px-3 text-black font-bold leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Masukkan nama"></input>
                </div>
                <div className="mx-8 w-1/2">
                  <label className="text-gray-400">Email</label>
                  <input class="appearance-none border-b-2  border-b-black w-full py-2 px-3 text-black font-bold leading-tight focus:outline-none focus:shadow-outline" id="name" type="email" placeholder="Masukkan email"></input>
                </div>
              </div>
              <div className="flex mt-8">
                <div className="mx-8 w-1/2">
                  <label className="text-gray-400">Phone</label>
                  <input class="appearance-none border-b-2  border-b-black w-full py-2 px-3 text-black font-bold leading-tight focus:outline-none focus:shadow-outline" id="name" type="tel" placeholder="Masukkan no telp"></input>
                </div>
                <div className="mx-8 w-1/2">
                  <label className="text-gray-400">Subject</label>
                  <input class="appearance-none border-b-2  border-b-black w-full py-2 px-3 text-black font-bold leading-tight focus:outline-none focus:shadow-outline" id="name" type="email" placeholder="Choose your Subject"></input>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <a href="#" title="" class="items-center justify-center hidden px-4 py-3 text-base font-medium text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black" role="button">
                  Submit
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
