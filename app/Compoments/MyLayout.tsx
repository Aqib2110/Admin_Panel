"use client"

import React, { useState,useEffect } from "react";
import { Home, BarChart2, Users, Settings } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "./ContextProvider";
export default function MyLayout({children}:{
    children:React.ReactNode
})
 {
const {day} = useContext(MyContext);
const [nav, setnav] = useState('Home')
const [subNav, setsubNav] = useState('Overview');
const handleClick = (label:string)=>{
  setnav(label);
}
console.log(day,"my");
const handleClickSub = (label:string)=>{
  setsubNav(label);
}
const navItems = [
  {
    label: "Home",
    icon: Home,
    subpages: [
      { routeName: "Overview", routeLink: "/" },
      { routeName: "Recent Activity", routeLink: "/home/recent-activity" }
    ]
  },

  {
    label: "Analytics",
    icon: BarChart2,
    subpages: [
      { routeName: "Sales Analytics", routeLink: "/analytics/sales" },
      { routeName: "Traffic Analytics", routeLink: "/analytics/traffic" }
    ]
  },

  {
    label: "Users",
    icon: Users,
    subpages: [
      { routeName: "All Users", routeLink: "/users/users" },
      { routeName: "User Roles & Permissions", routeLink: "/users/roles-and-permissions" }
    ]
  },

  {
    label: "Settings",
    icon: Settings,
    subpages: [
      { routeName: "Profile Settings", routeLink: " " },
      { routeName: "Security Settings", routeLink: " " }
    ]
  }
];
  return (
   <div className={`h-screen text-white ${day ? "bg-[#F7F7F7]" : "bg-[#0d0d0d]" }  flex relative`}>



<div className="absolute border  top-[-20%] right-[30%] w-[300px] h-[100vh]
  bg-gradient-to-b from-blue-500/60 via-blue-500/10 to-transparent
  blur-[80px] rotate-[8deg] animate-pulse" />



      <div className="m-2 ">
 <aside className={`w-64 ${day ? "bg-white border" : "bg-[#0F0F0F] border-r border-gray-900"}  rounded-xl p-6  transparent-none h-full `}>
        <h2 className={`${day ? "text-black" : "text-white"} text-3xl font-bold mb-10 tracking-widest`}>ADMIN</h2>
        <nav className="space-y-3 ">
          {navItems.map((item) => (
            <div key={item.label}>
            <div
              className={`flex items-center gap-4 ${nav === item.label ? 'text-blue-400' : `${day ? "text-black" : "text-white"}`} cursor-pointer hover:text-blue-400 transition-all duration-300`}
              onClick={() => handleClick(item.label)}
            >
              <item.icon />
              <span className="text-lg font-medium">{item.label}</span>
            </div>
            <div>
             {item.subpages.map((subpage)=>{
            return <ol key={subpage.routeName} className={`flex flex-col ${nav === item.label ? 'block' : 'hidden'} text-start mt-2`}>
              <li className={`text-sm list-disc ml-6 ${subNav === subpage.routeName ? `${day ? "text-gray-500" : "text-blue-200"}` : `${day ? "text-gray-400" :  "text-gray-500"}`} text-start  cursor-pointer hover:text-blue-200 transition-all duration-300`}
              onClick={()=>handleClickSub(subpage.routeName)}
              >
                <Link href={subpage.routeLink}>
                 {subpage.routeName}
                </Link>
               </li>
              </ol>
         })}
            </div>
            </div>
          ))}
        </nav>
      </aside>
      </div>
     

     
  {children}
      
    

    </div>
  );
}
