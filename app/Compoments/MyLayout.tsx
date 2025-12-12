"use client"

import React, { useState,useEffect } from "react";
import { Home, BarChart2, Users, Settings } from "lucide-react";
import Link from "next/link";

export default function MyLayout({children}:{
    children:React.ReactNode
})
 {
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

const [nav, setnav] = useState('Home')
const [subNav, setsubNav] = useState('Overview');
const handleClick = (label:string)=>{
  setnav(label);
}
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
if (!mounted) return null; 
  return (
   <div className="h-screen text-white bg-[#0d0d0d] flex relative">
      <div className="m-2  z-10">
 <aside className="w-64 bg-[#0F0F0F]  rounded-xl p-6 border-r border-gray-900 transparent-none h-full ">
        <h2 className="text-3xl font-bold mb-10 tracking-widest">ADMIN</h2>
        <nav className="space-y-3 ">
          {navItems.map((item) => (
            <div key={item.label}>
            <div
              className={`flex items-center gap-4 ${nav === item.label ? 'text-blue-400' : 'text-white'} cursor-pointer hover:text-blue-400 transition-all duration-300`}
              onClick={() => handleClick(item.label)}
            >
              <item.icon />
              <span className="text-lg font-medium">{item.label}</span>
            </div>
            <div>
             {item.subpages.map((subpage)=>{
            return <ol key={subpage.routeName} className={`flex flex-col ${nav === item.label ? 'block' : 'hidden'} text-start mt-2`}>
              <li className={`text-sm list-disc ml-6 ${subNav === subpage.routeName ? 'text-blue-200' : 'text-gray-500'} text-start  cursor-pointer hover:text-blue-200 transition-all duration-300`}
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
