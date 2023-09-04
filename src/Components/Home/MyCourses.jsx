import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import iconAddCircle from "../../img/AddCircle.png"
import iconCourseFill from '../../img/CourseFill.png';
import iconBookmarkFill from "../../img/BookmarkFill.png";
import iconCourseUnFill from "../../img/CoursesUnfill.png";

class MyCourses extends React.Component {
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
          <h1 className="mt-6 text-3xl">Chevalier/Add Courses</h1>
          <h3 className="mt-6 text-2xl">UI Design</h3>
          <form className="w-5/6 mt-6 border border-black rounded-md">
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
            <img className="w-9 h-9 my-1" src={iconCourseFill} alt="" />
            <div>
              <h1 className="mb-2 text-xl">Materi UI Design</h1>
              <p className="text-base font-light text-[#808182]">
                10 June 2023
              </p>
            </div>
          </div>

          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] relative my-6 flex flex-row p-6">
            <img
              src={iconBookmarkFill}
              className="absolute left-0 w-5 top-0"
              alt=""
            />
            <img className="w-9 h-9 my-1" src={iconCourseUnFill} alt="" />
            <div className="my-auto">
              <h1 className="my-auto text-xl">Tugas 1 UI Design</h1>
            </div>
          </div>

          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] my-6 flex flex-row p-6">
            <img className="w-9 h-9 my-1" src={iconCourseFill} alt="" />
            <div>
              <h1 className="mb-2 text-xl">Materi UI Design</h1>
              <p className="text-base font-light text-[#808182]">
                10 June 2023
              </p>
            </div>
          </div>

          <div className="border gap-6 rounded-xl shadow-lg border-[#F8A400] my-6 flex flex-row p-6">
            <img className="w-9 h-9 my-1" src={iconCourseFill} alt="" />
            <div>
              <h1 className="mb-2 text-xl">Materi UI Design</h1>
              <p className="text-base font-light text-[#808182]">
                10 June 2023
              </p>
            </div>
          </div>
          <div className=" mb-8 mt-24 border border-black">
            <div className="flex flex-row gap-4 justify-center px-2 items-center p-4">
              <h1>Add Materi</h1>
              <button>
                {" "}
                <img className="w-10 h-10" src={iconAddCircle} alt="" />{" "}
              </button>
            </div>
          </div>
          <div className="border border-black">
            <div className="flex flex-row gap-4 justify-center px-2 items-center p-4">
              <h1>Add Tugas</h1>
              <button>
                {" "}
                <img className="w-10 h-10" src={iconAddCircle} alt="" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCourses;
