import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import logoCheval from "../../img/cheva 3.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="flex mx-auto justify-between lg:hidden w-full text-white items-center py-12 bg-primary rounded-bl-[40px] rounded-br-[40px] drop-shadow-xl">
          <div className="flex items-center gap-4 ml-10">
            <div className="text-4xl h-full">
              <GiHamburgerMenu />
            </div>
            <h1 className="font-bold text-3xl">Dashboard</h1>
          </div>
          <div className="flex gap-2 mr-10">
            <div className="my-auto text-3xl">
              <BsFillBellFill />
            </div>
            <div className="my-auto text-5xl">
              <FaUserCircle />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between h-24 px-14 border-b-[1px] border-primary">
            <div className="flex gap-4 my-auto">
              <img
                src={logoCheval}
                alt=""
                className="rounded-full w-12 h-12 "
              />
              <div className="font-bold my-auto text-2xl -tracking-tighter">
                MY CHEVA
              </div>
            </div>
            <div className="flex my-auto gap-4">
              <div className="text-3xl my-auto text-primary">
                <BsFillBellFill />
              </div>
              <div className="text-5xl text-[#FD7401]">
                <FaUserCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
