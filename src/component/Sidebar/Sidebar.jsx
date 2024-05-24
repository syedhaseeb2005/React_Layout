import { Person } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeSideBarItem, setActiveSideBarItem] = useState(null);

  const sidebarMenu = [
    {
      id: 1,
      title: "Dashboard",
      icon: <Person />,
      path: "/dashboard",
    },
    {
      id: 2,
      title: "About us",
      icon: <Person />,
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      icon: <Person />,
      path: "/contact",
    },
  ];

  const handleMenuItemClick = (item) => {
    setActiveSideBarItem(item.id);
    navigate(item.path);
  };

  return (
    <div className="h-[502px] w-[200px] px-4 py-5 text-gray-300 bg-blue-950">
      <div className="">
        {sidebarMenu.map((item) => (
          <div
            onClick={() => handleMenuItemClick(item)}
            className={`mb-10 cursor-pointer hover:text-black hover:bg-slate-100 duration-300 rounded-md px-2 py-1 ${
              activeSideBarItem === item.id ? "bg-white text-black" : ""
            }`}
            key={item.id}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
