import React, { useState } from "react";

const CheckInOut = ({ addCheckInOut }) => {
  const [formData, setFormData] = useState({});
  const [checkedInPeople, setCheckedInPeople] = useState([]);

  const handleCheckIn = (event) => {
    event.preventDefault();
    const newPerson = {
      id: Date.now(), // Generate a unique ID for each person
      ...formData
    };
    setCheckedInPeople([...checkedInPeople, newPerson]); // Add the new person to the checked-in list
    setFormData({});
    addCheckInOut(newPerson);
  };

  const handleCheckOut = (personId) => {
    const updatedPeople = checkedInPeople.filter(person => person.id !== personId); // Remove the person from the checked-in list
    setCheckedInPeople(updatedPeople);
    addCheckInOut(personId); // Pass the person ID to the addCheckInOut function
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleCheckIn}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="emailAddress">Email Address:</label>
        <input
          type="email"
          id="emailAddress"
          value={formData.emailAddress || ""}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Check In" />
      </form>

      <h2>Checked-in People:</h2>
      <ul>
        {checkedInPeople.map(person => (
          <li key={person.id}>
            {person.name} ({person.emailAddress}) 
            <button onClick={() => handleCheckOut(person.id)}>Check Out</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckInOut;
