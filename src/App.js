import React, { useState } from "react";
import Dashboard from "./Component/Dashboard";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import AllCourses from "./Component/AllCourses";
import AddCourses from "./Component/AddCourses";
import MyCourses from "./Component/MyCourses";
import Member from "./Component/Member";
import Menilai from "./Component/Menilai";

export default function App() {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleComponents = () => {
    setShowDashboard(!showDashboard);
    setShowAllCourses(!showAllCourses);
  };

  return (
    <div className="flex flex-row bg-secondary font-poppins lg:bg-white">
      <Sidebar />
      <div className="flex flex-col w-screen ">
        <Navbar />
        <button className="absolute right-0 left-0" onClick={toggleComponents}>
          tombol ganti ganti sementara
        </button>
        {/* {showDashboard && <Dashboard />}
        {showAllCourses && <AllCourses />} */}
        {/* <AddCourses /> */}
        {/* <MyCourses /> */}
        {/* <Member /> */}
        <Menilai />
        <Footer />
      </div>
    </div>
  );
}
