import React, { useState } from "react";

const CheckInOut = ({ addCheckInOut }) => {
  const [formData, setFormData] = useState({});
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckIn = (event) => {
    event.preventDefault();
    setIsCheckedIn(true);
    addCheckInOut(formData);
  };

  const handleCheckOut = (event) => {
    event.preventDefault();
    setIsCheckedIn(false);
    addCheckInOut(formData);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <form onSubmit={isCheckedIn ? handleCheckOut : handleCheckIn}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={formData.name || ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="roomNumber">Room Number:</label>
      <input
        type="number"
        id="roomNumber"
        value={formData.roomNumber || ""}
        onChange={handleChange}
        required
      />

      <input type="submit" value={isCheckedIn ? "Check Out" : "Check In"} />
    </form>
  );
};

export default CheckInOut;
