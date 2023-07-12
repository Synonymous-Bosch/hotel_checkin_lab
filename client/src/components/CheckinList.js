import CheckinItem from "./CheckinItem";

const CheckinList = (guests, deleteCheckin) => {
  if (!guests) return <h2>Loading...</h2>;
  const guestList = guests.map((guest) => {
    return (
      <>
        <CheckinItem
          guest={guest}
          deleteCheckin={deleteCheckin}
          key={guest._id}
        />
      </>
    );
  });
  return <>{guestList}</>;
};

export default CheckinList;


