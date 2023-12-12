// components/Event.js
import React from 'react';
import { Link } from 'react-router-dom';


function EventCard({ eventId, title, description, date, time, location }) {
    return (
        
        <div className="">
            <div className='bg-fuchsia-400 rounded shadow p-2 mb-4 w-64 '>
                <Link to={`/events/${eventId}`} className="block">
                    <h2 className='text-xl text-slate-950 font-semibold mb-2'>{title}</h2>
                    <p className='text-gray-700 mb-2'>{description}</p>
                    <p className='text-gray-600 mb-1'>Date: {date}</p>
                    <p className='text-gray-600 mb-1'>Time: {time}</p>
                    <p className='text-gray-600 mb-0'>Location: {location}</p>
                </Link>
                <button
                    className="bg-purple-500 hover:bg-gradient-to-r from-orange-400 to-pink-300 py-2 text-white rounded-md w-full transition duration-300 ease-in-out mt-10">
                    <Link to="/bookingpage">
                     Book Event
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default EventCard;
