// components/Event.js
import React from 'react';

function Event({ title, description, date, time, location }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default Event;
