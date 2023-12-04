import React from 'react';
import UnsplashImage from './UnsplashImage';

const EventCreationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg">
      
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-cover bg-center p-8">
            <h1 className="text-white text-4xl mb-6 font-semibold">Welcome</h1>
            <p className="text-white text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
            <div className=''>
            <UnsplashImage/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-4xl mb-8 font-semibold italic text-slate-950 hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">CREATE YOUR NEXT EVENT</h2>
            <form action="#" className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input type="text" placeholder="Title" className="border border-gray-400 py-2 px-4 rounded-md w-full bg-red-50" />
                <input type="text" placeholder="Description" className="border border-gray-400 py-2 px-4 rounded-md w-full" />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <input type="text" placeholder="Date" className="border border-gray-400 py-2 px-4 rounded-md w-full" />
                <input type="text" placeholder="Time" className="border border-gray-400 py-2 px-4 rounded-md w-full" />
              </div>
              <input type="text" placeholder="Location" className="border border-gray-400 py-2 px-4 rounded-md w-full" />
              <button className="bg-purple-500 py-3 text-white rounded-md w-full mt-6">Create Event</button>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default EventCreationForm;
