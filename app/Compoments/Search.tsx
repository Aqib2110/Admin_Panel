"use client"
import { Bell } from "lucide-react";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sun,Moon } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const Search = () => {

 const { data: session } = useSession();
  const router = useRouter();
  const {day,setday} = useContext(MyContext);
  useEffect(() => {
    if (!session?.user) {
      router.push("/api/auth/signin");
    }
  }, [session, router]);

  return (
   <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className={`px-4 py-2 ${day ? "bg-white text-black" : "bg-[#0F0F0F] text-white border-gray-900" }  rounded-lg  w-3/4 focus:outline-none border `}
          />
          <div className="flex items-center gap-4">

          { day ? <Moon className={`${day ? "text-black" : "text-white"} cursor-pointer hover:text-blue-400`} onClick={()=>setday(day=>!day)}/>  : <Sun className={`${day ? "text-black" : "text-white"} cursor-pointer hover:text-blue-400`} onClick={()=>setday(day=>!day)}/>  }
            <Bell className={`${day ? "text-black" : "text-white"} cursor-pointer hover:text-blue-400 transition`} />
           
 <div className={`w-10 ${day ? "text-black bg-white" : "text-white bg-[#0F0F0F]"} h-10 border font-bold flex justify-center items-center border-gray-900  rounded-full cursor-pointer hover:ring-2 hover:ring-blue-400 transition`}> 
          {session?.user?.name?.[0] ?? ""}
    </div>
  
          </div>
        </div>
  )
}

export default Search
