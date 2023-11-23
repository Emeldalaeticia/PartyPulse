
import React from 'react';
import EventCard from './EventCard';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const EventList = () => {
    const dummyEventData = [
      {
        id: 1,
        title: 'Sample Event 1',
        description: 'This is a sample event description.',
        date: '2023-11-10',
        time: '18:00',
        location: 'Sample Location 1'
      },
      {
        id: 2,
        title: 'Sample Event 2',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      {
        id: 3,
        title: 'Sample Event 3',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      {
        id: 4,
        title: 'Sample Event 4',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      {
        id: 5,
        title: 'Sample Event 5',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      {
        id: 6,
        title: 'Sample Event 6',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      {
        id: 7,
        title: 'Sample Event 1',
        description: 'This is a sample event description.',
        date: '2023-11-10',
        time: '18:00',
        location: 'Sample Location 1'
      },
      {
        id: 8,
        title: 'Sample Event 2',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      {
        id: 9,
        title: 'Sample Event 3',
        description: 'This is another sample event description.',
        date: '2023-11-15',
        time: '14:00',
        location: 'Sample Location 2'
      },
      // Add more dummy events as needed
    ];
  
    return (
      <>
        <Navbar/>
        <div className="event-list-page md:items-center">
          <h1 className="text-3xl font-bold p-3 ">Upcoming Events</h1>
          <div className="flex flex-wrap -mx-4">
            {dummyEventData.map(event => (
              <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <EventCard
                  eventId={event.id} 
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                />
              </div>
            ))}
          </div>
        </div>
        </>
    );
};

export default EventList;
