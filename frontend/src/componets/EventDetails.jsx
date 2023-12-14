import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UnsplashImage from './UnsplashImage';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const EventDetail = () => {
  const { eventId } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`https://partypulse-q43v.onrender.com/api/events/${eventId}/`);
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
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg mt-2 mb-10">
      {/* Image on the left */}
      <div className="mr-8">
        <UnsplashImage />
      </div>

      {/* Event details on the right */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">Description: {description}</p>
        <p className="text-gray-600 mb-4">Date: {date}</p>
        <p className="text-gray-600 mb-4">Time: {time}</p>
        <p className="text-gray-600 mb-4">Location: {location}</p>
      </div>

      <div>
        <button className="bg-purple-500 hover:bg-gradient-to-r from-orange-400 to-pink-300 py-3 text-white rounded-md w-full transition duration-300 ease-in-out mt-10">
          <Link to="/ticketing">Book Event</Link>
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventDetail;
