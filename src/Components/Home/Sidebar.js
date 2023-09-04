import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="hidden bg-primaryMidContrast w-28 lg:block">
        <div className="h-24 justify-center items-center px-4 text-5xl text-white mx-auto my-auto flex border-b-[1px] border-primary">
          <div>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
