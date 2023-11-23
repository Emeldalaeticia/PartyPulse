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
                    <p className='text-gray-600'>Location: {location}</p>
                </Link>
            </div>
        </div>
    );
}

export default EventCard;
