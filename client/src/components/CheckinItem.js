const CheckinItem = ({guest, deleteCheckin}) => {
  return (
    <>
    <h1>Name : {guest.name}</h1>
    <h2>Email : {guest.email}</h2>
    <p>status : </p>{guest.status ? <p>Checked in</p> : <p>Checked out</p> }
    <button onClick={() => deleteCheckin(guest._id)}> 🗑 </button>
    </>
  )
}

export default CheckinItem













