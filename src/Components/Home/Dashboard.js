import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { AiFillFile } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

class Dashboard extends React.Component {
  state = {
    scrollLeft: 0,
    maxScroll: 0,
  };

  handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    this.setState({ scrollLeft });
  };

  calculateMaxScroll = () => {
    const container = document.getElementById("courses-container");
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      this.setState({ maxScroll });
    }
  };

  componentDidMount() {
    this.calculateMaxScroll();
    window.addEventListener("resize", this.calculateMaxScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateMaxScroll);
  }

  handleScrollRight = () => {
    const container = document.getElementById("courses-container");
    if (container) {
      const { scrollLeft, maxScroll } = this.state;
      const scrollIncrement = 200;
      const newScrollLeft = Math.min(scrollLeft + scrollIncrement, maxScroll);
      container.scrollLeft = newScrollLeft;
      this.setState({ scrollLeft: newScrollLeft });
    }
  };

  handleScrollLeft = () => {
    const container = document.getElementById("courses-container");
    if (container) {
      const { scrollLeft } = this.state;
      const scrollDecrement = 200;
      const newScrollLeft = Math.max(scrollLeft - scrollDecrement, 0);
      container.scrollLeft = newScrollLeft;
      this.setState({ scrollLeft: newScrollLeft });
    }
  };

  render() {
    return (
      <div className="mt-4 lg:mt-10">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl px-1 font-semibold lg:font-normal lg:text-3xl lg:mt-8 lg:ml-8">
            Zahralysa Shafiyyah A / UIUX
          </h1>
          <div className="bg-white p-6 mt-8 lg:mt-16 drop-shadow-xl lg:px-16 lg:py-10 lg:bg-primaryLowContrast ">
            <h1 className="text-2xl font-bold lg:font-normal">Timeline</h1>
            {/*timeline*/}
            <div className="my-6">
              <h4 className="text-base">Friday, 16 june</h4>
              <div className="bg-secondary lg:bg-white px-5 py-10 mt-2">
                <div className="flex">
                  <div className="flex gap-3 w-full justify-between">
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <div className="lg:my-0 text-4xl">
                        <AiFillFile />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-sm font-semibold">
                          Tugas 1 UI Design
                        </h2>
                        <h4 className="text-xs text-[#808182]">DIVISI UI/UX</h4>
                        <button className="hidden lg:block bg-primary text-sm mt-2 p-2 rounded-md text-white px-4">
                          Add submission
                        </button>
                      </div>
                    </div>
                    <button className="lg:hidden my-auto block bg-primary text-sm whitespace-nowrap p-2 rounded-md text-white">
                      Add submission
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6">
              <h4 className="text-base">Friday, 16 june</h4>
              <div className="bg-secondary lg:bg-white px-5 py-10 mt-2">
                <div className="flex">
                  <div className="flex gap-3 w-full justify-between">
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <div className="lg:my-0 text-4xl">
                        <AiFillFile />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-sm font-semibold">
                          Tugas 1 UI Design
                        </h2>
                        <h4 className="text-xs text-[#808182]">DIVISI UI/UX</h4>
                        <button className="hidden lg:block bg-primary text-sm mt-2 p-2 rounded-md text-white px-4">
                          Add submission
                        </button>
                      </div>
                    </div>
                    <button className="lg:hidden my-auto block bg-primary text-sm whitespace-nowrap p-2 rounded-md text-white">
                      Add submission
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <h4 className="my-auto">Show</h4>
              <select className="border-2 rounded-sm border-gray-500">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="bg-white p-6 mt-16 drop-shadow-xl">
            <h1 className="text-2xl">Overview Courses</h1>
            {/*Overview Courses*/}
            <div className="my-6 flex flex-row justify-between gap-6">
              {this.state.scrollLeft > 0 && (
                <IoIosArrowBack
                  className="my-auto cursor-pointer text-4xl text-black"
                  onClick={this.handleScrollLeft}
                />
              )}
              <div
                className="flex flex-row gap-6 overflow-hidden"
                onScroll={this.handleScroll}
                id="courses-container"
              >
                <div className="flex-shrink-0 p-2 w-48 lg:w-[312px]">
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
                <div className="flex-shrink-0 p-2 w-48 lg:w-[312px]">
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
                <div className="flex-shrink-0 p-2 w-48 lg:w-[312px]">
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
                <div className="flex-shrink-0 p-2 w-48 lg:w-[312px]">
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
                <div className="flex-shrink-0 p-2 w-48 lg:w-[312px]">
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
              {this.state.scrollLeft < this.state.maxScroll && (
                <IoIosArrowForward
                  className="my-auto cursor-pointer text-4xl text-black"
                  onClick={this.handleScrollRight}
                />
              )}
            </div>
            <div className="flex gap-3">
              <h4 className="my-auto">Show</h4>
              <select className="border-2 rounded-sm border-gray-500">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
