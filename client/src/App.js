import "./App.css";
import React, { useState, useEffect } from 'react';
import CheckinForm from "./components/CheckinForm";
import CheckinList from "./components/CheckinList";
import { getCheckins, postCheckin, deleteCheckin as apiDeleteCheckin } from "./components/CheckinService"; 

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
    postCheckin(checkin)  
    const tempCheckins = [...checkinList]
    tempCheckins.push(checkin);
    setCheckinList(tempCheckins)
    
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

  return (
    <>
      <h1>Hotel Checkin</h1>
      <CheckinForm handleCheckin={handleCheckin} />
      <CheckinList guests={checkinList} deleteCheckin={deleteCheckin} />
    </>
  );
}

export default App;