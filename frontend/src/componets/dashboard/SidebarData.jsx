import React from 'react';
import { datas } from './Data';

const SidebarData = ({ toggle }) => {
  return (
    <div className="mt-4 space-y-2">
      {datas.map(data => (
        <div 
          key={data.id} 
          className={`
            flex items-center ${toggle ? 'justify-center' : 'justify-start'} 
            p-2 rounded-lg cursor-pointer hover:bg-[#ec489940] 
            transition-all duration-300
          `}
        >
          <div className="text-xl">{data.icon}</div>
          {!toggle && (
            <div className="ml-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {data.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarData;