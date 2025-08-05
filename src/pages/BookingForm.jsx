import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BookingForm = ({ handleSubmit, handleChange, formState, getRideId }) => {
  const { rideId } = useParams()

  useEffect(() => {
    getRideId(rideId)
  }, [rideId])

  return (
    <>
      <div className="booking-form">
        <h2>Book Your Ticket</h2>
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

          <button type="submit" onClick={handleSubmit}>
            Book Now
          </button>
        </form>
      </div>
    </>
  )
}
export default BookingForm
