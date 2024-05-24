import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-blue-700 font-bold text-gray-300 p-4 flex text-center justify-between">
        <h1>Syed Haseeb</h1>
        <ul className="flex gap-10 cursor-pointer">
          <li>home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex">
        <Sidebar />
        <div className="flex bg-red-200 w-[100%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
