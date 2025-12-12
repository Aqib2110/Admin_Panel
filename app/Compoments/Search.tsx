"use client"
import React from 'react'
import { Bell } from "lucide-react";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {

//  const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!session?.user) {
//       router.push("/api/auth/signin");
//     }
//   }, [session, router]);
   
  return (
   <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-[#0F0F0F] text-white rounded-lg text-black w-3/4 focus:outline-none border border-gray-900"
          />
          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer hover:text-blue-400 transition" />
           {/* {session?.user && (
 <div className="w-10 h-10 border font-bold flex justify-center items-center border-gray-900 bg-[#0F0F0F] rounded-full cursor-pointer hover:ring-2 hover:ring-blue-400 transition"> 
      {(session as any)?.user.name[0] || ''} 
    </div>
  )} */}
          </div>
        </div>
  )
}

export default Search
