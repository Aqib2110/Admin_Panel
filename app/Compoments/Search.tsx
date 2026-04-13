"use client"
import { Bell } from "lucide-react";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sun,Moon,MenuIcon } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const Search = () => {

 const { data: session } = useSession();
  const router = useRouter();
  const {day,setday,openSidebar,setopenSidebar} = useContext(MyContext);
  useEffect(() => {
    if (!session?.user) {
      router.push("/api/auth/signin");
    }
  }, [session, router]);
console.log(openSidebar,"updated");
  return (
   <div className={`flex ${day ? "bg-white " : "bg-[#091729]"} md:bg-transparent  justify-between px-2 md:px-0 h-12 z-30 w-screen md:w-full overflow-hidden fixed md:relative top-0 left-0 items-center md:mb-8`}>
               <MenuIcon onClick={()=>{setopenSidebar(side=>!side);}} size={25} className={`${day ? "text-black" : "text-white"} block md:hidden cursor-pointer hover:text-blue-400 transition`} />

          <input
            type="text"
            placeholder="Search..."
            className={`px-4 hidden sm:block  py-2 ${day ? "bg-white text-black" : "bg-[#0F0F0F] text-white border-gray-900" }  rounded-lg  w-3/4 focus:outline-none border `}
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
