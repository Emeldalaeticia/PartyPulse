import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const EventDelete = () => {
    const { eventId } = useParams();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const deleteEvent = async () => {
        try {
          const response = await axios.delete(`https://partypulse-q43v.onrender.com/api/events/${eventId}/delete/`);
  
          if (response.ok) {
            console.log('Event deleted successfully');
            navigate('/eventlist'); // Use navigate instead of history.push
          } else {
            console.error('Failed to delete event');
          }
        } catch (error) {
          console.error('Error deleting event:', error);
        } finally {
          setLoading(false);
        }
      };
  
      deleteEvent();
    }, [eventId, navigate]); // Update the dependencies array
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg mt-2 mb-10">
          <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Delete Event</h2>
            <p className="text-gray-700 mb-4">Are you sure you want to delete this event?</p>
            <button
              className="bg-red-500 py-3 text-white rounded-md w-full mt-6"
              onClick={() => console.log('Handle delete logic here')}
            >
              Delete Event
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default EventDelete;
  