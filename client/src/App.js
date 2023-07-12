import "./App.css";
import React, { useState, useEffect } from 'react';
import CheckinForm from "./components/CheckinForm";
import CheckinList from "./components/CheckinList";
import { getCheckins, postCheckin, deleteCheckin } from "./components/CheckinService"; 


function App() {
  const [checkinList, setCheckinList] = useState([]);

  useEffect(()=>{
    getCheckins()
    .then((data)=>{
      console.log(data);
      setCheckinList(data)
    })
  },[]);

  const handleCheckin = (checkin) => {
    const tempCheckins = [...checkinList]
    tempCheckins.push(checkin);
    setCheckinList(tempCheckins)
  }

  return (
    <>
      <h1>Hotel Checkin</h1>
      <CheckinForm handleCheckin={handleCheckin}  />
      <CheckinList guests={checkinList} deleteCheckin={deleteCheckin} />
    </>
  );
}



export default App;
