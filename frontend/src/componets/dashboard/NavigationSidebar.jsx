import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiChevronLeft} from "react-icons/bi"
import SidebarData from './SidebarData';
import UserProfile from '../UserProfile';

const NavigationSidebar = () => {
  // Navigation links for different dashboard sections
  const[ toggle, setToggle] = useState(false);
  return (
    <div className={` ${toggle ? 'w-32' : " "} bg-slate-950 bg-opacity-25 h-fit w-[20rem] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-bg-slate-950-opacity-25 relative `}>
      <UserProfile toggle={toggle}/>
      <SidebarData toggle={toggle}/>
      <div className='absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-slate-950 bg-opacity-25 rounded-full cursor-pointer' onClick={() => {
        setToggle(!toggle);
      }}>
        <BiChevronLeft className={` ${toggle ? 'rotate-180' : " "} text-3xl transition-all duration-300`}/>
      </div>
    </div>
  );
};

export default NavigationSidebar;
