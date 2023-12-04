import React from 'react';
import UnsplashImage from './UnsplashImage';

const BookEvent = () => {
  // Mock data representing event details (replace it with your actual event data)
  const eventDetails = {
    eventName: 'Your Event Name',
    eventDate: 'Event Date',
    eventLocation: 'Event Location',
    contactName: 'Your Name',
    contactEmail: 'Your Email',
    // Add other event details as needed
  };

  const handleBooking = () => {
    // Logic to handle event booking
    console.log('Booking Event:', eventDetails);
    // Redirect or perform further actions
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg">
      <div className="max-w-4xl w-full p-8 lg:flex">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-white text-4xl mb-6 font-semibold">{eventDetails.eventName}</h1>
          <p className="text-white text-lg mb-4">
            <strong>Date:</strong> {eventDetails.eventDate}
          </p>
          <p className="text-white text-lg mb-4">
            <strong>Location:</strong> {eventDetails.eventLocation}
          </p>
          <p className="text-white text-lg mb-4">
            Want to attend this event? Contact us at:<br />
            <strong>{eventDetails.contactEmail}</strong>
          </p>
          <button
            onClick={handleBooking}
            className="bg-purple-500 hover:bg-gradient-to-r from-purple-400 to-pink-300 py-3 text-white rounded-md w-full transition duration-300 ease-in-out"
          >
            Book Event
          </button>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <UnsplashImage />
        </div>
      </div>
    </div>
  );
};

export default BookEvent;
