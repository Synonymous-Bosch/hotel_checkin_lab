import styled from "styled-components";
import React from "react";

const GuestContainer = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const GuestBox = styled.div`
  border: 1px solid #000;
  padding: 16px;
  margin: 10px;
  text-align: center;
`;

const GuestName = styled.h3`
  color: #333;
  margin-top: 0;
`;

const GuestInfo = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const CheckinItem = ({ guest, deleteCheckin }) => {
  return (
    <div>
      <GuestContainer>
        <GuestBox>
          <GuestName>Name: {guest.name}</GuestName>
          <GuestInfo>Email: {guest.email}</GuestInfo>
          <GuestInfo>
            status : {guest.status ? <b>Checked in</b> : <b>Checked out</b>}
          </GuestInfo>
          <button onClick={() => deleteCheckin(guest._id)}> 🗑 </button>
        </GuestBox>
      </GuestContainer>
    </div>
  );
};

export default CheckinItem;
