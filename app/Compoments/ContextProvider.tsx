"use client";
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
interface MyContextType {
    day: boolean;
    setday: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyContext = createContext<MyContextType>({
    day: false,
    setday: () => {}
});
const ContextProvider = ({ children}:{
    children:React.ReactNode
}) => {
const [day, setday] = useState(false);   
  return (
      <MyContext.Provider value={{day,setday}}>
        {children}
      </MyContext.Provider>
  )
}

export default ContextProvider
