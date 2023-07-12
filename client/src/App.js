import "./App.css";
import React, { useState, useEffect } from 'react';
import CheckinForm from "./components/CheckinForm";
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
      <Title>Hotel Checkin</Title>
      <CheckinForm handleCheckin={handleCheckin}  />
      <CheckinList guests={checkinList} deleteCheckin={deleteCheckin} />
    </>
  );
}

export default App;