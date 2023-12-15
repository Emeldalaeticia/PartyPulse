import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import UnsplashImage from './UnsplashImage';
import Navbar from './Navbar';

const BookEvent = () => {
  const { eventId } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(` https://partypulse-q43v.onrender.com/api/events/${eventId}/`);
        console.log('API Response:', response); // Log the response for debugging
        setSelectedEvent(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event details:', error);
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg mt-2 mb-10">Loading...</div>;
  }

  if (!selectedEvent) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg mt-2 mb-10">Event not found</div>;
  }


  const { title, description, date, time, location } = selectedEvent;
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center mt-1 mb-4 bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg">
        <div className="max-w-4xl w-full p-8 lg:flex">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-white text-4xl mb-6 font-semibold">{title}</h1>
            <p className="text-white text-lg mb-4">
              <strong>Date:</strong> {date}
            </p>
            <p className="text-white text-lg mb-4">
              <strong>Location:</strong> {location}
            </p>
            <p className="text-white text-lg mb-4">
              <strong>Description:</strong> {description}
            </p>
            <p className="text-white text-lg mb-4">
              Time:<br />
              <strong>{time}</strong>
            </p>
            <button
              className="bg-purple-500 hover:bg-gradient-to-r from-orange-400 to-pink-300 py-3 text-white rounded-md w-full transition duration-300 ease-in-out"
            >
              <Link to="/ticketing">Book Event</Link>
            </button>
          </div>
          <div className="lg:w-3/4 lg:pl-24">
            <div className="mt-0 mb-4">
              <h1>Book Your Event</h1>
            </div>
            <UnsplashImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookEvent;
