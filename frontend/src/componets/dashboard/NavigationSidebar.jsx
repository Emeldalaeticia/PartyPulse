import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from "react-icons/bi";
import SidebarData from './SidebarData';
import UserProfile from '../UserProfile';

const NavigationSidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`
      ${toggle ? 'w-20 md:w-24' : 'w-full md:w-72'} 
      bg-slate-950 bg-opacity-25 h-fit rounded-3xl md:ml-6 p-4 border 
      border-solid border-bg-slate-950-opacity-25 relative transition-all duration-300
      mx-4 md:mx-0 mb-4 md:mb-0
    `}>
      <UserProfile toggle={toggle} />
      <SidebarData toggle={toggle} />
      <div 
        className='absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 
        bg-slate-950 bg-opacity-25 rounded-full cursor-pointer hover:bg-opacity-40
        hidden md:flex'
        onClick={() => setToggle(!toggle)}
      >
        <BiChevronLeft className={`${toggle ? 'rotate-180' : ''} text-3xl transition-all duration-300`} />
      </div>
    </div>
  );
};

export default NavigationSidebar;