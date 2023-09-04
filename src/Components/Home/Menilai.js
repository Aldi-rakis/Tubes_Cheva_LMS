import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import iconAddCircle from "../../img/AddCircle.png";
import iconCourseFill from "../../img/CourseFill.png";
import iconBookmarkFill from "../../img/BookmarkFill.png";
import iconCourseUnFill from "../../img/CoursesUnfill.png";
import { MdEdit, MdDelete } from "react-icons/md";

class Menilai extends React.Component {
  render() {
    return (
      <div>
        <div
          className="w-full py-20 px-32 "
          style={{
            background:
              "linear-gradient(180deg, rgba(248, 164, 0, 1) 0%, rgba(0, 212, 255, 0) 100%)",
          }}
        >
          <h1 className="my-auto text-3xl mb-4">Tugas 1 UI Design</h1>
          <h1 className="my-auto text-xl">Deadline 16 june 11:59</h1>
          <form className="w-5/6 mt-4 border border-black rounded-md">
            <div className="relative">
              <input
                type="text"
                placeholder=""
                className="w-full py-3 px-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black right-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>
        </div>
        <div className="w-5/6 mx-auto mt-28">
          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] my-6 flex flex-row p-6">
            <div className="text-6xl my-auto">
              <FaUserCircle />
            </div>
            <div>
              <h1 className="mb-2 text-xl">Zahralysa Shafiyyah</h1>
              <p className="text-base font-light text-[#808182]">
                16 June 2023, 11:00 AM
              </p>
            </div>
            <div className="flex flex-row gap-4 ml-auto">
              <div className="text-6xl">
                <MdEdit />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto mt-6">
          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] my-6 flex flex-row p-6">
            <div className="text-6xl my-auto">
              <FaUserCircle />
            </div>
            <div>
              <h1 className="mb-2 text-xl">Zahralysa Shafiyyah</h1>
              <p className="text-base font-light text-[#808182]">
                16 June 2023, 11:00 AM
              </p>
            </div>
            <div className="flex flex-row gap-4 ml-auto">
              <div className="text-6xl">
                <MdEdit />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto mt-6">
          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] my-6 flex flex-row p-6">
            <div className="text-6xl my-auto">
              <FaUserCircle />
            </div>
            <div>
              <h1 className="mb-2 text-xl">Zahralysa Shafiyyah</h1>
              <p className="text-base font-light text-[#808182]">
                16 June 2023, 11:00 AM
              </p>
            </div>
            <div className="flex flex-row gap-4 ml-auto">
              <div className="text-6xl">
                <MdEdit />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto mt-6">
          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] my-6 flex flex-row p-6">
            <div className="text-6xl my-auto">
              <FaUserCircle />
            </div>
            <div>
              <h1 className="mb-2 text-xl">Zahralysa Shafiyyah</h1>
              <p className="text-base font-light text-[#808182]">
                16 June 2023, 11:00 AM
              </p>
            </div>
            <div className="flex flex-row gap-4 ml-auto">
              <div className="text-6xl">
                <MdEdit />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menilai;
