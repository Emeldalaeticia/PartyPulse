import React, { useState} from 'react';
import UnsplashImage from './UnsplashImage';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const EventCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    date: '',
    time: '',
    location: '',
  });

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
      const response = await fetch('http://127.0.0.1:8000/api/events/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful creation, e.g., redirect or show a success message
        console.log('Event created successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg mt-2 mb-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-cover bg-center p-8">
            <h1 className="text-white text-4xl mb-6 font-semibold">Welcome</h1>
            <p className="text-white text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus
              maecenas ac <a href="#" className="text-purple-500 font-semibold">
                Learn more
              </a>
            </p>
            <div className="">
              <UnsplashImage />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-4xl mb-8 font-semibold italic text-slate-950 hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              CREATE YOUR NEXT EVENT
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border border-gray-400  py-2 px-4 rounded-md w-full bg-red-50 text-slate-950 "
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-gray-400 py-2 px-4 rounded-md w-full text-slate-950"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border border-gray-400 py-2 px-4 rounded-md w-full text-slate-950 "
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border border-gray-400 py-2 px-4 rounded-md w-full text-slate-950"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Ticket Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border border-gray-400 py-2 px-4 rounded-md w-full text-slate-950"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border border-gray-400 py-2 px-4 rounded-md w-full text-slate-950"
                />
              </div>

              <button className="bg-purple-500 py-3 text-white rounded-md w-full mt-6" type="submit">
                <Link to="/eventlist">
                Create Event
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
      <section>
        <div>
          <p className="font-bold"> </p>
        </div>
      </section>
    </>
  );
};

export default EventCreationForm;
