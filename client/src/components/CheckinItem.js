const CheckinItem = ({guest, deleteCheckin}) => {
  return (
    <>
    <h1>Name : {guest.name}</h1>
    <h2>Email : {guest.email}</h2>
    <p>status : {guest.status}</p>
    <button onClick={() => deleteCheckin(guest._id)}> 🗑 </button>
    </>
  )
}

export default CheckinItem













