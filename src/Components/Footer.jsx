import React from "react";


const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="flex justify-center items-center px-4 text-uppercase">
        <img src="./assets/logo_btom.svg" className="mx-2" />
      </div>
      <div className="flex mt-8 justify-center font-semibold items-center">
        <a href="" className="text-black mx-8">
          Home
        </a>
        <a href="" className="text-black mx-8">
          Solutions
        </a>
        <a href="" className="text-black mx-8">
          About Us
        </a>
        <a href="" className="text-black mx-8">
          Blog
        </a>
        <a href="" className="text-black mx-8">
          Contact Us
        </a>
      </div>
      <div className="flex justify-center items-center mt-8">
        <a href="" className="mx-4">
          <img src="./assets/fb.svg" />
        </a>
        <a href="" className="mx-4">
          <img src="./assets/twitter.svg" />
        </a>
        <a href="" className="mx-4">
          <img src="./assets/yt.svg" />
        </a>
        <a href="" className="mx-4">
          <img src="./assets/linkedin.svg" />
        </a>
        <a href="" className="mx-4">
          <img src="./assets/pinterest.svg" />
        </a>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <p className="text-[#A5A5A5] tracking-widest text-sm">Copyrights ©2023 mycheva All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
