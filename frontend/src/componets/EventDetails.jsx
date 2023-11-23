// EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Dummy event data (replace this with actual data fetching logic)
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

  // Find the selected event based on the 'id' parameter
  const selectedEvent = dummyEventData.find(event => event.id === parseInt(id));

  // Check if the event exists (for safety)
  if (!selectedEvent) {
    return <div>Event not found</div>;
  }

  const { title, description, date, time, location } = selectedEvent;

  return (
    <div className="event-detail">
      <h1>Event Details</h1>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default EventDetail;
