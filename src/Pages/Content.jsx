
import React, { useState } from "react";
import Dashboard from '../Components/Home/Dashboard';
import Navbar from "../Components/Home/Navbar";
import Footer from '../Components/Home/Footer'
import Sidebar from '../Components/Home/Sidebar'
import AllCourses from '../Components/Home/AllCourses'
import AddCourses from '../Components/Home/AddCourses'
import MyCourse from "../Components/Home/MyCourses"
import Member from '../Components/Home/Member'
import Menilai from '../Components/Home/Menilai'







const Content = () => {

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

  )
}

export default Content