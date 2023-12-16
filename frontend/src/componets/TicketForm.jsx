import React, { useState } from 'react';

const TicketForm = () => {
  const [numTickets, setNumTickets] = useState(1);
  const ticketPrice = 10; // Assuming a standard ticket price of $10

  const handleNumTicketsChange = (e) => {
    const newNumTickets = parseInt(e.target.value, 10) || 0;
    setNumTickets(newNumTickets);
  };

  const calculateTotalPrice = () => {
    return numTickets * ticketPrice;
  };

  return (
    <div>
      <h2>Ticket Order Form</h2>
      <form>
        <label>
          Number of Tickets:
          <input
            type="number"
            value={numTickets}
            onChange={handleNumTicketsChange}
            min="1"
          />
        </label>
        <br />
        <p>Total Price: ${calculateTotalPrice()}</p>
      </form>
    </div>
  );
};

export default TicketForm;