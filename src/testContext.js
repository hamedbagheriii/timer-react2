import React, { createContext } from 'react';


export const DataContext = createContext({
    message:'' , setMessage:()=>{} , timeList: [] ,setTimeList:()=>{}
})