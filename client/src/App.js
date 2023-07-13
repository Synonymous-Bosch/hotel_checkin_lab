import React, { useState, useEffect } from 'react';
import CheckInOut from "./components/CheckInOut";
import CheckinList from "./components/CheckinList";
import { getCheckins, postCheckin, deleteCheckin } from "./components/CheckinService";

function App() {
  const [checkinList, setCheckinList] = useState([]);

  useEffect(() => {
    fetchCheckins();
  }, []);

  const fetchCheckins = async () => {
    try {
      const data = await getCheckins();
      setCheckinList(data);
    } catch (error) {
      console.error("Error fetching check-ins:", error);
    }
  };

  // Label: Changed function name to "handleCheckInOut"
  const handleCheckInOut = async (checkin, operationType) => {
    try {
      if (operationType === "checkin") {
        const newCheckin = await postCheckin(checkin);
        // Label: Spread previous checkinList and add newCheckin
        setCheckinList([...checkinList, newCheckin]);
      } else if (operationType === "checkout") {
        await deleteCheckin(checkin);
        // Label: Filter out the checkin being checked out
        setCheckinList(checkinList.filter((item) => item._id !== checkin));
      }
    } catch (error) {
      console.error("Error handling check-in/out:", error);
    }
  };

  return (
    <>
      <h1>Hotel Check-in</h1>
      {/* Label: Pass "handleCheckInOut" as prop */}
      <CheckInOut addCheckInOut={handleCheckInOut} />
      {/* Label: Pass "deleteCheckin" as prop */}
      <CheckinList guests={checkinList} deleteCheckin={handleCheckInOut} />
    </>
  );
}

export default App;
