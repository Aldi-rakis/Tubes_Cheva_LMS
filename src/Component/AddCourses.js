import React from "react";

class AddCourses extends React.Component {
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
          <h3 className="mt-6 text-2xl">UIUX</h3>
        </div>
        <div className="w-full">
          <div className="mx-32 my-20 h-96 border shadow-lg border-[#FACA10]">
            <div className=" p-12 flex flex-row gap-6">
              <label className="font-bold my-auto" htmlFor="">
                Title
              </label>
              <input
                className="placeholder:px-4 py-2 w-1/2 border border-[#FD7401]"
                placeholder="UI Design"
                type="text"
              />
            </div>
            <div className="p-12">
              <button className="bg-primary py-1 px-10 text-white rounded-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCourses;
