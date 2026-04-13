"use client";
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
interface MyContextType {
    day: boolean;
    setday: React.Dispatch<React.SetStateAction<boolean>>;
    openSidebar: boolean;
    setopenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyContext = createContext<MyContextType>({
    day: false,
    setday: () => {},
    openSidebar: false,
    setopenSidebar: () => {}

});
const ContextProvider = ({ children}:{
    children:React.ReactNode
}) => {
const [day, setday] = useState(false);  
const [openSidebar, setopenSidebar] = useState(false); 
  return (
      <MyContext.Provider value={{day,setday,openSidebar,setopenSidebar}}>
        {children}
      </MyContext.Provider>
  )
}

export default ContextProvider
