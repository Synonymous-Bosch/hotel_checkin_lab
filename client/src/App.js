import React, { useState, useEffect } from 'react';
import CheckInOut from "./components/CheckInOut";
import CheckinList from "./components/CheckinList";
import styled from "styled-components";
import { getCheckins, postCheckin, deleteCheckin as apiDeleteCheckin } from "./components/CheckinService"; 


const Title = styled.h1`
  text-align: center;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

function App() {
  const [checkinList, setCheckinList] = useState([]);

  useEffect(()=>{
    getCheckins()
    .then((data)=>{
      console.log(data);
      setCheckinList(data)
    })
  },[]);      

  // Label: Changed function name to "handleCheckInOut"
  const handleCheckInOut = async (checkin, operationType) => {
    try {
      if (operationType === "checkin") {
        postCheckin(checkin)  
    const newCheckin = await postCheckin(checkin);
        // Label: Spread previous checkinList and add newCheckin
        setCheckinList([...checkinList, newCheckin]);
      } else if (operationType === "checkout") {
        await deleteCheckin(checkin);
        // Label: Filter out the checkin being checked out
        setCheckinList(t.filter((item) => item._id !== checkin));
      }
    } catch (error) {
      console.error("Error handling check-in/out:", error);
      
  }

  const deleteCheckin = (checkinId) => {
    apiDeleteCheckin(checkinId)
    .then(() => {
      const temp = [...checkinList];
      const index = temp.map(checkin => checkin._id).indexOf(checkinId);
      temp.splice(index, 1);
      setCheckinList(temp)
    })
  }
  };

  return (
    <>
      <Title>Hotel Check-in</Title>
      {/* Label: Pass "handleCheckInOut" as prop */}
      <CheckInOut addCheckInOut={handleCheckInOut} />
      {/* Label: Pass "deleteCheckin" as prop */}
      <CheckinList guests={checkinList} deleteCheckin={handleCheckInOut} />
    </>
  );
}

export default App;

