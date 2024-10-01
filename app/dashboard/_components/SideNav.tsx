"use client";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { History, Home, House, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
function SideNav() {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();
  return (
    <div className="flex flex-col p-3 h-screen border-r-2 border-charcoal bg-black">
      <div className="p-3 ">
        <Image src={logo} alt="logo" width={200} height={200} />
      </div>
      <div className="mt-10 p-2">
        {menuList.map((menu, index) => (
          <div
            className={`flex flex-row gap-3 p-4 items-center justify-start hover:bg-charcoal mb-2 rounded-lg cursor-pointer ${
              path == menu.path ? "bg-zinc-800" : "bg-none"
            }`}
          >
            <menu.icon size={24} />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
