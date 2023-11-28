import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams(); // Get the 'eventId' parameter from the URL

  // Dummy event data (replace this with actual data fetching logic)
  const dummyEventData = [
    // Your event data here...
  ];
  // Find the selected event based on the 'eventId' parameter
  const selectedEvent = dummyEventData.find(event => event.id === parseInt(eventId));

  // Check if the event exists (for safety)
  if (!selectedEvent) {
    return <div>Event not found</div>;
  }

  const { title, description, date, time, location } = selectedEvent;

  return (
    <>
        <div className="event-detail">
        
        <h1>Event Details</h1>
        <h2>{title}</h2>
        <p>Description: {description}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Location: {location}</p>
      </div>
    </>
  );
};

export default EventDetail;
