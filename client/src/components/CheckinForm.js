import React, { useState } from 'react'
const postCheckin = require('./CheckinService')

const CheckinForm = ({handleCheckin}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameChange = (e) => {
      setName(e.target.value)
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

  
    const handleSubmit = (e) => {
      e.preventDefault()
      const guestCheckin = {"name": name, "email": email, "status": false }
      handleCheckin(guestCheckin)
      e.target.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Guest name' onChange={handleNameChange} />
            <input type="text" placeholder='Guest email' onChange={handleEmailChange} />
            <button>Submit</button>
        </form>
    )
}

export default CheckinForm;