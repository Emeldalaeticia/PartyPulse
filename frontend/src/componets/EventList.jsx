import EventCard from './EventCard';
import Navbar from './Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer';

const EventList = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('https://partypulse-q43v.onrender.com/api/events/');
        setEventsData(response.data); // Set the fetched event data to the state
      } catch (error) {
        console.error('Error fetching event data:', error);
      }

    };

    fetchEventData(); // Call the function to fetch event data when the component mounts

    
  }, []);

  return (
    <>
      <Navbar />
      <div className="event-list-page md:items-center">
        <h1 className="text-3xl font-bold p-3">Upcoming Events</h1>
        <div className="flex flex-wrap -mx-4">
          {eventsData.map(event => (
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
      <div className='mb-4'>
        <Footer/>
      </div>
      
    </>
  );
};

export default EventList;