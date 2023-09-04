import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import iconAddCircle from '../../img/AddCircle.png';

class AllCourses extends React.Component {
  render() {
    return (
      <div className="flex-col flex justify-center gap-12 p-8">
        <h1 className="mx-auto mt-6 lg:text-xl">All Courses</h1>
        <div className="flex items-center w-full justify-center relative">
          <input
            type="text"
            className="border w-1/2 border-gray-300 rounded-l-lg py-2 px-4 outline-none"
            placeholder="Search..."
          />
          <button className="py-2 px-4 absolute right-[400px]">
            <FaSearch />
          </button>
        </div>
        <div className="grid grid-cols-1 w-2/3 lg:grid-cols-3 gap-6 p-4 mx-auto">
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
          <div className="flex-shrink-0 p-2 w-auto">
            <div className="bg-primary lg:h-48 gap-4 p-6 h-28 flex justify-between">
              <h1 className="text-sm font-semibold">UI Design</h1>
              <div className="my-auto text-5xl">
                <FaUserCircle />
              </div>
            </div>
            <div className="bg-secondary lg:bg-white drop-shadow-md h-[105px] lg:h-[80px]">
              <h1 className="pt-4 font-bold text-base">UI Design</h1>
            </div>
          </div>
        </div>
        <div className="w-[64%] mx-auto border border-black">
          <div className="flex flex-row gap-4 justify-center px-2 items-center p-4">
            <h1>Add Courses</h1>
            <button>
              {" "}
              <img className="w-10 h-10" src={iconAddCircle} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AllCourses;
