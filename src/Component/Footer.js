import React from "react";
import logoCheval from "../img/cheva 3.svg";
import logoFacebook from "../img/Facebook.png";
import logoTwitter from "../img/Twitter.png";
import logoInstagram from "../img/Instagram.png";
import logoLinkedin from "../img/Linkedin.png";
import logoYoutube from "../img/Youtube.png";
import logoGooglePlus from "../img/Google+.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="hidden bottom-0 lg:block w-full  bg-white border-t border-black  mt-16">
        <div className="flex flex-row px-44 pt-8 pb-16  justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <img
                src={logoCheval}
                alt=""
                className="rounded-full w-12 h-12 "
              />
              <div className="font-bold my-auto -tracking-tighter">
                MY CHEVA
              </div>
            </div>
            <div>
              <div className="text-gray-500 mt-2">
                Say cracking goal Why bugger do <br /> one happy days.!
              </div>
            </div>
            <div className="mt-4 mb-2">Socials</div>
            <ul className="flex gap-2 flex-row">
              <li>
                <a href="">
                  <img className="w-8 h-8" src={logoInstagram} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="w-8 h-8" src={logoFacebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="w-8 h-8" src={logoTwitter} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="w-8 h-8" src={logoLinkedin} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="w-8 h-8" src={logoYoutube} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="w-8 h-8" src={logoGooglePlus} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="mb-2 text-black">
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">How we Work</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="mb-2 text-black">
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Wp Theme</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">App Theme</a>
            </li>
            <li>
              <a href="#">Professional</a>
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-gray-500">
            <li className="mb-2 text-black">
              <a href="#">Office Info</a>
            </li>
            <li>
              <a href="#">
                354 Maryam Springs Suite <br /> 260 New York, USA
              </a>
            </li>
            <li className="text-orange-500">
              <a href="#">+(364) 763 234 325</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
