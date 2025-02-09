import React from "react";


const Footer = () => {
  return (

        <div className="bg-white py-8 md:py-10">
          {/* Logo */}
          <div className="flex justify-center items-center px-4">
            <img 
              src="./assets/logo_btom.svg" 
              alt="MyCheva Logo" 
              className="h-8 md:h-10"
            />
          </div>
    
          {/* Navigation Links */}
          <div className="mt-8 px-4">
            <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <a href="" className="text-black font-semibold hover:text-[#F8A400] transition-colors">
                Home
              </a>
              <a href="" className="text-black font-semibold hover:text-[#F8A400] transition-colors">
                Solutions
              </a>
              <a href="" className="text-black font-semibold hover:text-[#F8A400] transition-colors">
                About Us
              </a>
              <a href="" className="text-black font-semibold hover:text-[#F8A400] transition-colors">
                Blog
              </a>
              <a href="" className="text-black font-semibold hover:text-[#F8A400] transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
    
          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <a href="" className="hover:opacity-80 transition-opacity">
              <img src="./assets/fb.svg" alt="Facebook" className="w-3 md:w-4" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity">
              <img src="./assets/twitter.svg" alt="Twitter" className="w-6 md:w-8" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity">
              <img src="./assets/yt.svg" alt="YouTube" className="w-6 md:w-8" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity">
              <img src="./assets/linkedin.svg" alt="LinkedIn" className="w-6 md:w-8" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity">
              <img src="./assets/pinterest.svg" alt="Pinterest" className="w-6 md:w-8" />
            </a>
          </div>
    
          {/* Copyright Text */}
          <div className="mt-8 text-center px-4">
            <p className="text-[#A5A5A5] tracking-widest text-xs md:text-sm">
              Copyrights ©2023 mycheva All Right Reserved
            </p>
          </div>
        </div>
  );
};

export default Footer;
