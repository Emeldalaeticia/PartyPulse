import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const EventUpdateForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    date: '',
    time: '',
    location: '',
  });

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`https://partypulse-q43v.onrender.com/api/events/${eventId}/`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://partypulse-q43v.onrender.com/api/events/${eventId}/update`, formData);

      if (response.ok) {
        console.log('Event updated successfully');
        navigate(`/event/${eventId}`); // Use navigate instead of history.push
      } else {
        console.error('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg mt-2 mb-10">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Update Event</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Input fields for event details */}
            {/* ... */}
            
            <button
              className="bg-purple-500 py-3 text-white rounded-md w-full mt-6"
              type="submit"
              onSubmit={handleChange}
            >
              Update Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventUpdateForm;
