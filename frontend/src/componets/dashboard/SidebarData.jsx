import React from 'react';
import { datas } from './Data';

const SidebarData = ({ toggle }) => {
  return (
    <div>
      {datas.map(data => (
        <div key={data.id} className='flex items-center justify-center mt-2 p-2 rounded-lg cursor-pointer hover:bg-[#ec489940] transition-all duration-300'>
          <div>{data.icon}</div>
          {!toggle && <div>{data.text}</div>}
        </div>
      ))}
    </div>
  );
};

export default SidebarData;
