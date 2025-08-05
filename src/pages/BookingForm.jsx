import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BookingForm = ({ handleSubmit, handleChange, formState }) => {
  const navigate = useNavigate()
  const { rideId } = useParams()
  const [ride_id, setRide_id] = useState(null)

  useEffect(() => {
    // console.log(typeof rideId)
    // console.log(rideId)
    setRide_id(rideId)
  }, [rideId])

  // it will keep the ride id in the setform state even  when u submit and initialize
  ride_id ? (formState.ride = ride_id) : null

  return (
    <>
      {ride_id ? (
        <div className="booking-form">
          <h2>Book Your Ticket</h2>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formState.name}
              required
            ></input>

            <label htmlFor="purchase_date">Date</label>
            <input
              type="date"
              id="purchase_date"
              name="purchase_date"
              onChange={handleChange}
              value={formState.purchase_date}
              required
            />

            {/* This input is hidden from user */}
            {/* <input
              type="number"
              name="ride"
              onChange={handleChange}
              value={ride_id}
              hidden
            /> */}

            <button type="submit" onClick={handleSubmit}>
              Book Now
            </button>
          </form>
          {/* {ticketId ? navigate(`/ticket/${ticketId}`) : null} */}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}
export default BookingForm
